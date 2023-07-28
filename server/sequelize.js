var Sequelize = require('sequelize');
var dbSeq = new Sequelize('chatter', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

var User = dbSeq.define('Users', {
  username: Sequelize.STRING
});

var Room = dbSeq.define('Rooms', {
  roomname: Sequelize.STRING
});

var Message = dbSeq.define('Message', {
  userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});


module.exports = dbSeq;




