const notificationSchema = {
  _id:       Number,
  userId:    Number,
  tripId:    Number,
  type:      String, // 'message' || 'joinTrip' || 'joinRequest'
  sender:    Number  // userId
};

export default notificationSchema;