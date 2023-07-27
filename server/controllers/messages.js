var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      console.log('LINE 6 data from messages get CONTROLLER: ', data);
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // console.log('line 16 messages post req', req.query);
    models.messages.create(req.query.username, req.query.msg, req.query.room, (err, data) => {
      // console.log('LINE 17 data from messages post CONTROLLER: ', data);
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 201;
        res.end();
      }
    })
  } // a function which handles posting a message to the database
};
