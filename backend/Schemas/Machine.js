import mongoose from "mongoose";
const { Schema } = mongoose;

const machineSchema = new Schema(
  {
    title: { type: String, required: true },
    cpu: { type: Number, required: true },
    ram: { type: Number, required: true },
    size: { type: Number, required: true },
    time: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default mongoose.model('Machine', machineSchema);
