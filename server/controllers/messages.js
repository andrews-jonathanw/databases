// var models = require('../models');
var dbSeq = require('../db/index');

module.exports = {
  get: function (req, res) {
    dbSeq.Message.findAll({include: [User]}), (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 201;
        console.log('LINE 10 data from GET messages,', JSON.stringify(data));
        res.end(JSON.stringify(data));
      }
    };
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var username = req.body.username;
    var message = req.body.message;
    var roomname = req.body.roomname;
    var userid;
    dbSeq.User.findOrCreate({
      where: {username: [username]},}).then(function (error, user) {
      userid = user.id;
    });

    // var userid = dbSeq.Message.findOrCreate({
    //   where: {}
    // });

    dbSeq.Message.create({ userid: userid, text: message, roomname: roomname }), (err, data) => {
      console.log('LINE 17 data from messages post CONTROLLER: ', data);
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 201;
        res.end();
      }
    };
  } // a function which handles posting a message to the database
};


// dbSeq.Message.create({user: req.body.username, text: req.body.message, roomname: req.body.roomname}
// console.log('LINE 6 data from messages get CONTROLLER: ', data);
// if (err) {
//   console.error(err);
// } else {
//   res.statusCode = 200;
//   console.log('data from GET messages,', JSON.stringify(data));
//   res.end(JSON.stringify(data));
// }

// models.messages.create(req.body.username, req.body.message, req.body.roomname, (err, data) => {
//   // console.log('LINE 17 data from messages post CONTROLLER: ', data);
//   if (err) {
//     console.error(err);
//   } else {
//     res.statusCode = 201;
//     res.end();
//   }
// });