import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  _id:       Number,
  userId:    Number,
  tripId:    Number,
  type:      String, // 'message' || 'joinTrip' || 'joinRequest'
  sender:    Number  // userId
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

export default notificationSchema;