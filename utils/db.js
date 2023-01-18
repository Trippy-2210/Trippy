import userDataSchema     from './schemas/userData.js';
import sessionSchema      from './schemas/session.js';
import profileSchema      from './schemas/profile.js';
import tripSchema         from './schemas/trip.js';
import messageSchema      from './schemas/message.js';
import notificationSchema from './schemas/notification.js';

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/trippy';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.set('strictQuery', true);
mongoose.connect(url, options);

const UserData     = new mongoose.model('UserData', userDataSchema);
const Session      = new mongoose.model('Session', sessionSchema);

const Profile      = new mongoose.model('Profile', profileSchema);
const Trip         = new mongoose.model('Trip', tripSchema);
const Message      = new mongoose.model('Message', messageSchema);
const Notification = new mongoose.model('Notification', notificationSchema);

var schemas = {
  UserData,
  Session,
  Profile,
  Trip,
  Message,
  Notification
};

export default schemas;