import mongoose from "mongoose"
const { Schema } = mongoose

// Define the schema for a transaction request with the required fields
const requestSchema = new Schema({
  senderAddress: {
    type: String,
    required: true, // The address from which the transaction is being sent (e.g., a wallet address or user address)
    trim: true,
  },
  amount: {
    type: Number,
    required: true, // The amount involved in the transaction
    min: 0, // Amount must be a positive value
  },
  datasetLink: {
    type: String,
    required: true, // Link to the dataset associated with the transaction
    trim: true,
  },
  modelLink: {
    type: String,
    required: true, // Link to the model associated with the transaction
    trim: true,
  },
  requirementsLink: {
    type: String,
    required: true, // Link to the requirements or documentation associated with the transaction
    trim: true,
  },
  machineId:{
    type: Schema.Types.ObjectId,
    ref: 'Machine',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'cancelled'], // Status of the transaction
    default: 'pending',
  }
});

// Create the model
const Transaction = mongoose.model('Request', requestSchema);

export default Transaction;
