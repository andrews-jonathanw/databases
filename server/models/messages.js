var db = require('../db');
// console.log(db);

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM messages', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
    // database.query(mysql query SELECT) (error,data) => {
    /**
     * if
     *  error
     *
     * else
     *  callback(null, data);
     */
  }, // a function which produces all the messages
  create: function (username, room, msg, callback) {
    username_id = db.query(`SELECT id FROM users WHERE username = ${username}`);
    // console.log('usernameID', username_id);
    roomname_id = db.query(`SELECT id FROM rooms WHERE roomname = ${room}`);
    // console.log('roomsID', roomname_id);

    db.query(`INSERT INTO messages(text, username_id, roomname_id) VALUES(${msg}, ${username_id}, ${roomname_id})`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        // need to stringify here for controller
        callback(null, JSON.stringify(data));
      }
    });
  } // a function which can be used to insert a message into the database
};

