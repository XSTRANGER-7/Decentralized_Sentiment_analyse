import express from 'express';
import {createMachine , getAllMachines , getMachinesByUserId} from '../controllers/machine.js';

const router = express.Router();

// Create a machine
router.post('/create', createMachine);

// Get all machines
router.get('/all', getAllMachines);

// Get machines by user ID
router.get('/:email', getMachinesByUserId);

export default router;