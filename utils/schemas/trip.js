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
        status: String, // type string from notifications schema 'pending', 'accepted', or 'denied'
      },
    ],
    users: [String], // userId
    messages: [String], // message objectId
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default tripSchema;
