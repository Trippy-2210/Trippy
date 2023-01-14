const sessionSchema = new mongoose.Schema({
  _id:          Number,
  userId:       Number,
  expTimestamp: Number
});

export default sessionSchema;