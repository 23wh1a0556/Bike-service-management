const Cart = require('../models/Cart');
const SparePart = require('../models/SparePart');

// ================= ADD TO CART =================
const addToCart = async (req, res) => {
  try {
    const { partId, quantity } = req.body;
    const userId = req.user.id;

    const qty = Number(quantity);

    if (qty <= 0) {
      return res.status(400).json({ message: "Quantity must be greater than 0" });
    }

    const sparePart = await SparePart.findById(partId);

    if (!sparePart) {
      return res.status(404).json({ message: "Spare part not found" });
    }

    // ✅ STOCK CHECK
    if (sparePart.quantity < qty) {
      return res.status(400).json({
        message: `Insufficient stock for ${sparePart.partName}`
      });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      // Create new cart
      cart = await Cart.create({
        user: userId,
        items: [{
          part: partId,
          quantity: qty,
          price: sparePart.price * qty
        }],
        totalPrice: sparePart.price * qty
      });

    } else {

      const itemIndex = cart.items.findIndex(
        item => item.part.toString() === partId
      );

      if (itemIndex > -1) {

        const newQuantity = cart.items[itemIndex].quantity + qty;

        // ✅ STOCK CHECK AGAIN
        if (newQuantity > sparePart.quantity) {
          return res.status(400).json({
            message: `Insufficient stock for ${sparePart.partName}`
          });
        }

        cart.items[itemIndex].quantity = newQuantity;
        cart.items[itemIndex].price =
          sparePart.price * newQuantity;

      } else {

        cart.items.push({
          part: partId,
          quantity: qty,
          price: sparePart.price * qty
        });

      }

      // Update total price
      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.price,
        0
      );

      await cart.save();
    }

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= GET CART =================
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id })
      .populate('items.part', 'partName price');

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= REMOVE FROM CART =================
const removeFromCart = async (req, res) => {
  try {
    const { partId } = req.body;

    const cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      item => item.part.toString() !== partId
    );

    cart.totalPrice = cart.items.reduce(
      (acc, item) => acc + item.price,
      0
    );

    await cart.save();

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart
};