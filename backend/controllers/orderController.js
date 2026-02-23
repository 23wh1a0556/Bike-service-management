// const placeOrder = async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user.id }).populate('items.part');

//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({ message: 'Cart is empty' });
//     }

//     const orderItems = [];
//     let totalAmount = 0;

//     // First: Validate stock only
//     for (const item of cart.items) {
//       const sparePart = await SparePart.findById(item.part._id);

//       if (!sparePart) {
//         return res.status(404).json({ message: 'Spare part not found' });
//       }

//       if (sparePart.quantity < item.quantity) {
//         return res.status(400).json({
//           message: `Insufficient stock for ${sparePart.partName}`
//         });
//       }
//     }

//     // Second: Reduce stock & calculate total
//     for (const item of cart.items) {
//       const sparePart = await SparePart.findById(item.part._id);

//       sparePart.quantity -= item.quantity;
//       await sparePart.save();

//       const itemTotal = sparePart.price * item.quantity;
//       totalAmount += itemTotal;

//       orderItems.push({
//         part: sparePart._id,
//         quantity: item.quantity,
//         price: itemTotal
//       });
//     }

//     const order = await Order.create({
//       user: req.user.id,
//       items: orderItems,
//       totalAmount
//     });

//     // Clear cart
//     cart.items = [];
//     cart.totalPrice = 0;
//     await cart.save();

//     res.status(201).json(order);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };






const Order = require('../models/Order');
const Cart = require('../models/Cart');
const SparePart = require('../models/SparePart');

// Place order (cart → order)
const placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.part');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const orderItems = [];
    let totalAmount = 0; // 🔥 calculate fresh total

    // Check stock & reduce quantity
    for (const item of cart.items) {

      const sparePart = await SparePart.findById(item.part._id);

      if (!sparePart) {
        return res.status(404).json({ message: 'Spare part not found' });
      }

      if (sparePart.quantity < item.quantity) {
        return res.status(400).json({
          message: `Insufficient stock for ${sparePart.partName}`
        });
      }

      // Reduce stock
      sparePart.quantity -= item.quantity;
      await sparePart.save();

      const itemTotal = sparePart.price * item.quantity; // 🔥 calculate item total
      totalAmount += itemTotal; // 🔥 add to total

      orderItems.push({
        part: sparePart._id,
        quantity: item.quantity,
        price: itemTotal
      });
    }

    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      totalAmount
    });

    // Clear cart after order
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('items.part');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "username email")
      .populate("items.part", "partName price");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const validStatuses = ["Pending", "Shipped", "Delivered", "Cancelled"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res.json({ message: "Order status updated", order });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { placeOrder, getOrders, getAllOrders, updateOrderStatus};