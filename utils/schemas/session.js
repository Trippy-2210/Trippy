import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  _id:          Number,
  sessionId:    String,
  userId:       Number,
  expTimestamp: Number
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

export default sessionSchema;