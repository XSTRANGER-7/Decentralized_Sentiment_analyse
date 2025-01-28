import express from 'express';
import Request from '../Schemas/Request.js';
import User from '../Schemas/User.js';
import Machine from '../Schemas/Machine.js';
const router = express.Router();

router.post('/transactions', async (req, res) => {
  const { senderAddress, amount, datasetLink, modelLink, requirementsLink ,machineId} = req.body;

  // Validate input data
  if (!senderAddress || !amount || !datasetLink || !modelLink || !requirementsLink) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create the transaction
    const newRequest = new Request({
      senderAddress,
      amount,
      datasetLink,
      machineId,
      modelLink,
      requirementsLink,
      status: 'pending', // Default status
    });

    // Save the Request to MongoDB
    await newRequest.save();

    // Respond with the newly created Request
    res.status(201).json(newRequest);
  } catch (error) {
    console.error('Error creating Request:', error);
    res.status(500).json({ error: 'Error creating Request' });
  }
});

router.get('/request/:userId', async (req, res) => {
    const { userId } = req.params;
    
    try {
        // Find all transactions associated with the user ID
        const user = await User.findOne({ email: userId });
        const userMachineIds = await Machine.find({userId : user._id}) // Assuming this is an array of machine IDs

        const transactions = await Request.find({ 
        });

        const userIds = userMachineIds.map(user => user._id.toString());
        console.log(userIds , transactions);


        const filteredTransactions = transactions.filter(tran =>
            userIds.includes(tran.machineId.toString())
        );
        
       
    console.log(filteredTransactions);
        // Respond with the transactions
        res.status(200).json(filteredTransactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Error fetching transactions' });
    }
    });

export default router;
