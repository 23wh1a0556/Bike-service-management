const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
  },

  totalAmount: {
    type: Number,
    required: true
  },

  billDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Billing', billingSchema);
