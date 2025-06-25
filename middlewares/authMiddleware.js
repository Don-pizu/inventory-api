const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.protect = async (req, res, next) => {
  let token;

  // Expect token in Authorization header: Bearer <token>
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user and attach to request (without password)
      req.user = await User.findById(decoded.id).select('-password');

      next(); // Proceed to the next middleware or controller
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};



/* const jwt = require('jsonwebtoken'); 
const User = require('../models/userModel'); 

exports.protect = async (req, res, next) => { 
	let token = req.headers.authorization?.split(' ')[1]; 
	if (!token) 
		return res.status(401).json({ message: 'Not authorized' }); 
	try { 
		const decoded = jwt.verify(token, process.env.JWT_SECRET); 
		req.user = await User.findById(decoded.id).select('-password'); 
		next(); 
	} catch { 
		res.status(401).json({ message: 'Token invalid or expired' }); 
	} 
};  */