const MySportsFeed = require('mysportsfeeds-node');
const msf = new MySportsFeed('1.2', true);

msf.authenticate('b7022a66-275a-4e4e-bcd9-7f4e72', 'sportboi');

var data = msf.getData('nba', '2016-2017-regular', 'player_gamelogs', 'json', {player: 'stephen-curry'});

console.log('data');