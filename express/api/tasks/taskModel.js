const mongoose = require('mongoose')

module.exports = mongoose.model('Task', new mongoose.Schema({
  name: {
    type: 'String',
    trim: true
  },
  taskId: {
    type: 'Number',
    default: 0
  }
}))