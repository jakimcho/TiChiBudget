const mongoose = require('mongoose');
let Person = mongoose.model('Person');

exports.listAllUsers = (req, res) => {
  Person.find({}, function(err, person) {
    if (err) {
      res.send(err);
    }

    res.json(person);
  });
};


exports.createUser = (req, res) => {
  var person = new Person(req.body);
  person.save(function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};


exports.getUser = (req, res) => {
  Person.findById(req.params.userId, function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};
