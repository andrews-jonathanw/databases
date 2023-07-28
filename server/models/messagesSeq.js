var dbSeq = require('../sequelize.js');
console.log('dbSeq', dbSeq.Message);


dbSeq.Message.sync( {alter: true} )
  .then(function(data) {
    console.log('this is data from messages controller: ', data);
    // Now instantiate an object and save it:
    return dbSeq.Message.create({userid: data.username, text: data.message, roomname: data.roomname});
  })
  .then(function() {
    // Retrieve objects from the database:
    return dbSeq.Message.findAll();
  })
  .then(function() {
    dbSeq.close();
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    dbSeq.close();
  });