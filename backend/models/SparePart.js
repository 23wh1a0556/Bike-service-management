const mongoose = require('mongoose');

const sparePartSchema = new mongoose.Schema({
  partName: {
    type: String,
    required: true
  },

  description: String,

  price: {
    type: Number,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  image: {
    type: String,
    default: 'no-image.png'
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SparePart', sparePartSchema);
