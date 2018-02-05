
const mongoose = require('mongoose');

let schema = mongoose.Schema;


const personSchema = new schema({
  firstName: {
    type: String,
    default: ''
  },
  userName: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  password: {
    type: String,
    required: 'Kindly enter the name of the task'
  }
});

module.exports = mongoose.model('Person', personSchema);
