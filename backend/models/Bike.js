const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },

  bikeModel: {
    type: String,
    required: true
  },

  bikeNumber: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Bike', bikeSchema);
