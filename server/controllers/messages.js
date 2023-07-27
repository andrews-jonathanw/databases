var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      console.log('LINE 6 data from messages get CONTROLLER: ', data);
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 200;
        console.log('data from GET messages,', JSON.stringify(data));
        res.end(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('line 16 messages post req', req.body);
    models.messages.create(req.body.username, req.body.message, req.body.roomname, (err, data) => {
      // console.log('LINE 17 data from messages post CONTROLLER: ', data);
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 201;
        res.end();
      }
    });
  } // a function which handles posting a message to the database
};
