import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  _id:            Number,
  firstName:      String,
  lastName:       String,
  bio:            String,
  photo:          String,
  trips:         [Number], // tripId
  notifications: [String]  // notificationId
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

export default profileSchema;