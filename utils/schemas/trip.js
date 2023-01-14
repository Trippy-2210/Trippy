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

  request:       [{
    userId: Number,
    status: Boolean
  }],
  users:         [Number], // userId
  messages:      [Number]  // messageId
});

export default tripSchema;