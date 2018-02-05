module.exports = function(app) {
  let user = require('../controllers/UserController');

  // todoList Routes
  app.route('/users')
    .get(user.listAllUsers)
    .post(user.createUser);


  app.route('/users/:userId')
    .get(user.getUser);
};
