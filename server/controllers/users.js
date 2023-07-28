// var models = require('../models');
var dbSeq = require('../db/index');

module.exports = {
  get: function (req, res) {
    dbSeq.User.findAll({})
      .then((users) => {
        console.log('Data from users get CONTROLLER:', users);
        res.statusCode = 200;
        res.end(JSON.stringify(users));
      })
      .catch((err) => {
        console.error(err);
        res.statusCode = 500;
        res.end();
      });
  },
  post: function (req, res) {
    var username = req.body.username;
    // console.log('username', username); // Valjean
    dbSeq.User.create({ username: username })
      .then(() => {
        console.log('User created successfully');
        res.statusCode = 201;
        res.end();
      })
      .catch((err) => {
        console.error(err);
        res.statusCode = 500;
        res.end();
      });
  }
};

// module.exports = {
//   get: function (req, res) {
//     dbSeq.User.getAll((err, data) => {
//       console.log('LINE 6 data from users get CONTROLLER: ', data);
//       if (err) {
//         console.error(err);
//       } else {
//         res.statusCode = 200;
//         res.end(JSON.stringify(data));
//       }
//     });
//   },
//   post: function (req, res) {
//     console.log('POST user', dbSeq.User);
//     var user = JSON.stringify(req.body.username);
//     // console.log('line 17 POST inside CONTROLLERS USER', user);
//     dbSeq.User.create(user, (err, data) => {
//       console.log('LINE 18 data from users post CONTROLLER: ', data);
//       if (err) {
//         console.error(err);
//       } else {
//         res.statusCode = 201;
//         res.end();
//       }
//     });
//   }
// };
