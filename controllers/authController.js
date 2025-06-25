// controllers/authController.js

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Create JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register new user
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required.' });
        }

        // Check if user already exists
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(409).json({ message: 'Username already exists.' });
        }

        const user = await User.create({ username, password });

        res.status(201).json({
            _id: user._id,
            username: user.username,
            token: createToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Login existing user
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required.' });
        }

        const user = await User.findOne({ username });

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        res.status(200).json({
            _id: user._id,
            username: user.username,
            token: createToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};








/* const User = require('../models/userModel'); 
const jwt = require('jsonwebtoken'); 
// Create JWT token 
const createToken = (id) => { 
return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' }); 
}; 
exports.register = async (req, res) => { 
const { username, password } = req.body; 
if (!username || !password) 
return res.status(400).json({ message: 'Username and password required' 
});
const user = await User.create({ username, password }); 
res.status(201).json({ 
_id: user._id, 
username: user.username, 
token: createToken(user._id) 
}); 
}; 
exports.login = async (req, res) => { 
const { username, password } = req.body; 
const user = await User.findOne({ username }); 
if (!user || !(await user.matchPassword(password))) { 
return res.status(401).json({ message: 'Invalid credentials' }); 
} 
res.json({ 
_id: user._id, 
username: user.username, 
token: createToken(user._id) 
}
}); 
};    */
