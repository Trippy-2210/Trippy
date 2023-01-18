import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  _id:            Number,
  ownerId:        Number,
  tripTitle:      String,
  destination:    String,
  startDate:      String,
  endDate:        String,
  description:    String,
  budget:         Number,
  photo:          String,
  activities:    [String],

  requests:       [{
    userId: Number,
    status: String,
  }],
  users:         [Number], // userId
  messages:      [Number]  // messageId
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

export default tripSchema;