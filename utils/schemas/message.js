const messageSchema = new mongoose.Schema({
  _id:       Number,
  tripId:    Number,
  userId:    Number,
  content:   String,
  createdAt: Number
});

export default messageSchema;