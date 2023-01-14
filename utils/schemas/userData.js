const userDataSchema = new mongoose.Schema({
  _id:      Number,
  userId:   Number,
  email:    String,
  password: String,
  salt:     String
});

export default userDataSchema;