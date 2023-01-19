import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    userId: String,
    firstName: String,
    lastName: String,
    bio: String,
    photo: String,
    trips: [String], // tripId
    notifications: [String], // notificationId
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default profileSchema;
