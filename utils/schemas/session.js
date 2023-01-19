import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  _id:          Number,
  session_id:    String,
  user_id:       Number
}, {
  versionKey: false // You should be aware of the outcome after set to false
});
