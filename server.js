//server.js
const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// config .env
dotenv.config();

// connect to DB
connectDB();

const PORT = process.env.PORT || 5000

//Route
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
