const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const sparePartRoutes = require('./routes/sparePartRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);
app.use('/api/parts', sparePartRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

module.exports = app;
// const express = require('express');
// const cors = require('cors');

// const app = express();   // FIRST create app
// // app.use('/uploads', express.static('uploads'));

// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// const sparePartRoutes = require('./routes/sparePartRoutes');
// const cartRoutes = require('./routes/cartRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const authRoutes = require('./routes/authRoutes');

// app.use('/api/parts', sparePartRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/auth', authRoutes);

// app.get("/", (req, res) => {
//   res.send("API Running...");
// });

// module.exports = app;