var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT users.username FROM users', (error, data) => {
      if (error) {
        throw error;
      }
      callback(null, data);
    });
  },
  create: function (user, callback) {
    console.log('user in CREATE MODEL ', user, ' type: ', typeof user)
    db.query(`INSERT INTO users(username) VALUES('Valjean')`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        // need to stringify here for controller
        console.log('inside CREATE query,', JSON.stringify(data));
        callback(null, JSON.stringify(data));
      }
    });
  }
};
