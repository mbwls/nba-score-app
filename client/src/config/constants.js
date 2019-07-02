import moment from 'moment';
const APPCONST = {};
const REFERENCE = moment();

APPCONST.app_url = 'nba-score';
APPCONST.server_url = window.location.hostname !== 'localhost' ? '' : 'http://localhost:3005';
APPCONST.TODAY = REFERENCE.clone().startOf('day');
APPCONST.YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');
APPCONST.TOMORROW = REFERENCE.clone().add(1, 'days').startOf('day');

export default APPCONST;