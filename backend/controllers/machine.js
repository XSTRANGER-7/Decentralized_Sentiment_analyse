import { v4 as uuidv4 } from 'uuid';

import Machine from '../Schemas/Machine.js';
import User from '../Schemas/User.js';

// Create a machine
export const createMachine = async (req, res) => {
    try {
        const { title, time, cpu=56, ram, size, userId="679509efe85e7024f70dcf04" } = req.body;

        // Find the user from MongoDB

        console.log("koo")
        const user = await User.findById(userId);
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        

        // Create the machine and save it to MongoDB
        const newMachine = new Machine({
            title,
            time,
            cpu,
            ram,
            size,
            userId
        });

        console.log(newMachine);

        await newMachine.save(); // Save the machine to the database

        return res.status(201).json(newMachine);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get all machines
export const getAllMachines = async (req, res) => {
    try {
        // Fetch all machines from MongoDB
        const machines = await Machine.find();
        return res.status(200).json(machines);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get machines by user ID
export const getMachinesByUserId = async (req, res) => {
    try {
        const { email } = req.params;
        console.log(email,"op");
        // Find machines for the given user ID
        const user = await User.findOne({email: email});
        
        const userMachines = await Machine.find({ userId: user._id });
        return res.status(200).json(userMachines);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};