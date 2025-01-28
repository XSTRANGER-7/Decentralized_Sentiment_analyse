
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Schemas/User.js';

const router = express.Router();


// Sign Up Route
router.post('/sign-up', async (req, res) => {
    try {
        const { email, password, name,  role } = req.body;
        console.log(email, password, name,  role);

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log(existingUser);
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the passwordss
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new User({
            email,
            hashedPassword,
            name,
            role : role || 'CONTRACTOR',
        });
        await newUser.save();


       return  res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Login Route
// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user from MongoDB by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Verify the password
        const isVerified = await bcrypt.compare(password, user.hashedPassword);
        if (!isVerified) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT with user _id
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set the cookie with the token
        res.cookie('authToken', token, {
            httpOnly: true,
        });

        // Respond with a success message and user info
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


export default router;
