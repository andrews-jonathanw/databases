var db = require('../db');
// console.log(db);

module.exports = {
  getAll: function (callback) {
    db.query('SELECT users.username, rooms.roomname, messages.text from messages INNER JOIN users ON messages.username_id = users.id INNER JOIN rooms ON messages.roomname_id = rooms.id', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('data from GETALL,', data);
        callback(null, data);
      }
    });
  },

  // a function which produces all the messages
  create: function (username, msg, room, callback) {
    /* GET USERNAME FROM TABLE */
    db.query('SELECT id FROM users WHERE username = ?', [username], (error, userData) => {
      if (error) {
        console.log('line 28 error in messages models', error);
      } else {
        console.log('userDATA: ', userData);
        var usernameid = userData[0].id;
        /* GET ROOMNAME FROM TABLE */
        db.query('SELECT id FROM rooms WHERE roomname = ?', [room], (error, roomData) => {
          if (error) {
            console.log('line 35 error in messages models');
          } else {
            console.log('roomData: ', roomData);
            if (roomData[0] === undefined) {
              db.query('INSERT INTO rooms (roomname) VALUES(?)', [room], (err, data) => {
                console.log(data);
                var roomnameid = data.insertId;
                db.query('INSERT INTO messages(text, username_id, roomname_id) VALUES(?, ?, ?)', [msg, usernameid, roomnameid], (err, data) => {
                  console.log('final messages POST,', data);
                  if (err) {
                    console.log('line 41 error in messages models', err);
                  } else {
                    // need to stringify here for controller
                    callback(null, JSON.stringify(data));
                  }
                });
              });
            } else {
              roomnameid = roomData[0].id;
              db.query('INSERT INTO messages(text, username_id, roomname_id) VALUES(?, ?, ?)', [msg, usernameid, roomnameid], (err, data) => {
                console.log('final messages POST,', data);
                if (err) {
                  console.log('line 41 error in messages models', err);
                } else {
                  // need to stringify here for controller
                  callback(null, JSON.stringify(data));
                }
              });
            }
          }
        });
      }
    });
  }
};

