import { get } from '../utils//axios/axiosRequest';
import moment from 'moment';
import _ from 'lodash';

const requestDailyScores = 'REQUEST_DAILY_SCORES';
const setReferenceData = 'SET_REFERENCE_DATA';
const setScoresDate = 'SET_SCORES_DATE';
const setSelectedGame = 'SET_SELECTED_GAME';
const setGameData = 'SET_GAME_DATA';

export const actionTypes = {
    requestDailyScores,
    setScoresDate,
    setSelectedGame,
    setReferenceData,
    setGameData
};

export const actionCreators = {
    setScoresDate: dateString => async (dispatch, getState) => {
        const newDate = moment(dateString).format();

        if (
            moment(getState().scoresView.dateKey)
                .clone()
                .startOf('day')
                .isSame(
                    moment(newDate)
                        .clone()
                        .startOf('day')
                ) &&
            getState().scoresView.scoresData.length > 0
        )
            return;

        let response = await get(
            `nba-scores/balldontlie-api/getDailyScores?date=${moment(newDate)
                .clone()
                .format('YYYY-MM-DD')}`
        );
        if (response.data.success) {
            dispatch({ type: setScoresDate, payload: newDate });
            dispatch({
                type: requestDailyScores,
                payload: response.data.data.data
            });
        }
    },

    setReferenceData: () => async (dispatch, getState) => {
        if (getState().scoresView.referenceData.length > 0) return;
        let response = await get(`nba-scores/balldontlie-api/getReferenceData`);
        if (response.data.success) {
            dispatch({
                type: setReferenceData,
                payload: response.data.data.data
            });
        }
    },

    setSelectedGame: gameData => (dispatch, getState) => {
        dispatch({
            type: setSelectedGame,
            payload: gameData
        });
    },

    setGameData: gameID => async (dispatch, getState) => {
        let payload = {};
        let response = await get(
            `nba-scores/balldontlie-api/getGameData?gameID=${gameID}`
        );

        const playerStatsByTeam = (rawStats, team) => {
            return rawStats.filter(item => {
                return (
                    item.team.id ===
                    getState().scoresView.selectedGame[`${team}_team`].id
                );
            });
        };

        const totalStatsByTeam = playerStats => {
            let totals = {};
            const sliderMetrics = [
                'fgm',
                'fga',
                'fg3m',
                'fg3a',
                'ftm',
                'fta',
                'reb',
                'oreb',
                'ast',
                'stl',
                'blk',
                'turnover',
                'pf'
            ];

            sliderMetrics.map(val => {
                return (totals[val] = _.sumBy(playerStats, o => {
                    return o[val];
                }));
            });

            // CALCULATE PERCENTAGES FOR RATE STATS
            totals.fg_pct = parseFloat(
                ((totals.fgm / totals.fga) * 100).toFixed(1)
            );
            totals.fg3_pct = parseFloat(
                ((totals.fg3m / totals.fg3a) * 100).toFixed(1)
            );
            totals.ft_pct = parseFloat(
                ((totals.ftm / totals.fta) * 100).toFixed(1)
            );

            return totals;
        };

        if (response.data.success) {
            let rawStats = response.data.data.data;
            let homePlayers = playerStatsByTeam(rawStats, 'home'),
                awayPlayers = playerStatsByTeam(rawStats, 'visitor');

            let homeTotals = totalStatsByTeam(homePlayers),
                awayTotals = totalStatsByTeam(awayPlayers);

            dispatch({
                type: setGameData,
                payload: {
                    ...payload,
                    home: { players: homePlayers, team: homeTotals },
                    away: { players: awayPlayers, team: awayTotals }
                }
            });
        }
    }
};
