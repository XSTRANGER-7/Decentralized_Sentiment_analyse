import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['PROVIDER', 'CONTRACTOR'], default: 'CONTRACTOR' },
    hashedPassword: { type: String, required: true },
    passwordSalt: { type: String },
    machines: [{ type: Schema.Types.ObjectId, ref: 'Machine' }],
    
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
