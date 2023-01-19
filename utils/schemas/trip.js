import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema(
  {
    ownerId: String,
    tripTitle: String,
    destination: String,
    startDate: String,
    endDate: String,
    description: String,
    budget: Number,
    photo: String,
    activities: [String],

    requests: [
      {
        userId: String,
        status: Boolean,
      },
    ],
    users: [String], // userId
    messages: [String], // messageId
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default tripSchema;
