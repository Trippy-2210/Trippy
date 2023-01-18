import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    tripId: String,
    userId: String,
    content: String,
    createdAt: String,
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default messageSchema;
