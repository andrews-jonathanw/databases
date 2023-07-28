var Sequelize = require('sequelize');
var dbSeq = new Sequelize('chat', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

var User = dbSeq.define('Users', {
  username: Sequelize.STRING
}, {
  timestamps: false
});

var Message = dbSeq.define('Message', {
  userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {
  timestamps: false
});

User.sync();
Message.sync();
exports.User = User;
exports.Message = Message;
module.exports = {User, Message, dbSeq};


// var mysql = require('mysql2');
// // Create a database connection and export it from this file.
// // Confirm that the credentials supplied for the connection are correct.
// // On your personal computer supply the correct credentials for your mySQL account -- likely
// // user: 'root', password: ''
// // OR
// // user: 'root', password: 'some_password_you_created_at_install'
// const db = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat',
// });
