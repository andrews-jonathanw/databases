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
    var user = JSON.stringify(req.body.username);
    console.log('line 17 POST inside CONTROLLERS USER', user);
    models.users.create(user, (err, data) => {
      console.log('LINE 18 data from users post CONTROLLER: ', data);
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 201;
        res.end();
      }
    });
  }
};
