import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  userId:    String,
  tripId:    String,
  type:      String, // 'message' || 'joinTrip' || 'joinRequest'
  sender:    String  // userId
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

export default notificationSchema;