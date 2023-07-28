var dbSeq = require('../sequelize');

User.sync()
  .then(function() {
    // Now instantiate an object and save it:
    return dbSeq.User.create({username: 'Jean Valjean'});
  })
  .then(function() {
    // Retrieve objects from the database:
    return dbSeq.User.findAll({ where: {username: 'Jean Valjean'} });
  })
  .then(function(users) {
    users.forEach(function(user) {
      console.log(user.username + ' exists');
    });
    dbSeq.close();
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    dbSeq.close();
  });