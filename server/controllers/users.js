var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      console.log('LINE 6 data from users get CONTROLLER: ', data);
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(data));
      }
    });
  },
  post: function (req, res) {
    console.log('line 16 POST inside CONTROLLERS USER', req.body);


    models.users.create(req.body.username, (err, data) => {
      console.log('LINE 18 data from users post CONTROLLER: ', data);
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 201;
        res.end();
      }
    })
  }
};
