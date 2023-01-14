import mongoose from 'mongoose';

const userDataSchema = new mongoose.Schema({
  _id:      Number,
  userId:   Number,
  email:    String,
  password: String,
  salt:     String
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

export default userDataSchema;