const profileSchema = new mongoose.Schema({
  _id:            Number,
  firstName:      String,
  lastName:       String,
  bio:            String,
  photo:          String,
  trips:         [Number], // tripId
  notifications: [Number]  // notificationId
});

export default profileSchema;