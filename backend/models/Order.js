const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  part: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SparePart",
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    items: [orderItemSchema],

    totalPrice: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending"
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending"
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "Online"],
      default: "COD"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);




// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   customer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Customer'
//   },

//   items: [
//     {
//       part: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'SparePart'
//       },
//       quantity: Number
//     }
//   ],

//   totalAmount: Number,

//   status: {
//     type: String,
//     enum: ['Placed', 'Shipped', 'Delivered'],
//     default: 'Placed'
//   },

//   orderDate: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Order', orderSchema);







// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   // Change from 'customer' to 'user' to match our auth system
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },

//   items: [
//     {
//       part: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'SparePart',
//         required: true
//       },
//       quantity: {
//         type: Number,
//         required: true,
//         min: 1
//       },
//       price: {
//         type: Number,
//         required: true
//       }
//     }
//   ],

//   totalAmount: {
//     type: Number,
//     required: true
//   },

//   status: {
//     type: String,
//     enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
//     default: 'Pending'
//   },

//   paymentMethod: {
//     type: String,
//     enum: ['Cash', 'Card', 'Online'],
//     default: 'Cash'
//   },

//   orderDate: {
//     type: Date,
//     default: Date.now
//   },

//   deliveryDate: {
//     type: Date
//   }
// });

// module.exports = mongoose.model('Order', orderSchema);