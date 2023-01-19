
import profileSchema from './schemas/profile.js';
import tripSchema from './schemas/trip.js';
import messageSchema from './schemas/message.js';
import notificationSchema from './schemas/notification.js';

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/trippy';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.set('strictQuery', true);
mongoose.connect(url, options);

const Profile =
  mongoose.models.Profile || new mongoose.model('Profile', profileSchema);
const Trip = mongoose.models.Trip || new mongoose.model('Trip', tripSchema);
const Message =
  mongoose.models.Message || new mongoose.model('Message', messageSchema);
const Notification =
  mongoose.models.Notification ||
  new mongoose.model('Notification', notificationSchema);

var schemas = {
  Profile,
  Trip,
  Message,
  Notification,
};

export default schemas;
