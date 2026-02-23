const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  bike: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bike'
  },

  serviceType: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },

  sparePartsUsed: [
    {
      part: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SparePart'
      },
      quantity: Number
    }
  ],

  serviceDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', serviceSchema);
