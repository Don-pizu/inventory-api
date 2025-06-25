//app.js
const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoute');
const orderRoutes = require('./routes/orderRoute');
const authRoutes = require('./routes/authRoute');
const categoryRoute = require('./routes/categoryRoute')

//Middleware 
app.use(express.json());

//Mount product route
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/category', categoryRoute);

module.exports = app;

