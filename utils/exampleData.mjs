import userDataSchema     from './schemas/userData.js';
import sessionSchema      from './schemas/session.js';
import profileSchema      from './schemas/profile.js';
import tripSchema         from './schemas/trip.js';
import messageSchema      from './schemas/message.js';
import notificationSchema from './schemas/notification.js';



import mongoose from 'mongoose';

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






let dummyMessages = [
  {
    _id: 1,
  tripId: 1,
  userId: 1,
  content: 'hello',
  createdAt: '2016-05-18T16:00:00Z'
  },
  {
    _id: 2,
  tripId: 1,
  userId: 2,
  content: 'nanananananaa',
  createdAt: '2016-05-18T16:00:00Z'
  },
  {
    _id: 3,
  tripId: 1,
  userId: 1,
  content: 'batman?',
  createdAt: '2016-05-18T16:00:00Z'
  },
  {
    _id: 4,
  tripId: 1,
  userId: 2,
  content: 'yes',
  createdAt: '2016-05-18T16:00:00Z'
  },
  {
    _id: 5,
  tripId: 2,
  userId: 1,
  content: 'hello',
  createdAt: '2016-05-18T16:00:00Z'
  },
  {
    _id: 6,
  tripId: 2,
  userId: 2,
  content: 'goodbye',
  createdAt: '2016-05-18T16:00:00Z'
  },
  {
    _id: 7,
  tripId: 2,
  userId: 1,
  content: 'fine then',
  createdAt: '2016-05-18T16:00:00Z'
  }

]


let dummyTrips = [
  {
    _id: 1,
    tripId: 1,
    ownerId: 1,
    tripTitle: 'Vacation in Smallville',
    destination: 'Smallville',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'helping with the farm',
    activities:['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://flxt.tmsimg.com/assets/p7893454_b_v13_aa.jpg',
    requests:[{userId: 1, status: 'accepted'}, {userId: 2, status: 'accepted'}, {userId: 3, status: 'pending'}, {userId: 4, status: 'denied'}, {userId: 5, status: 'accepted'}],
    users:[1,2,5],
    messages: [1, 2, 3, 4]
  },
  {
    _id: 2,
    tripId: 2,
    ownerId: 2,
    tripTitle: 'Vacation in Gotham City',
    destination: 'Gotham City',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'Help me solve a riddle',
    activities: ['fun stuff', 'other stuff'],
    budget: 3,
    photo: 'https://cdn.mos.cms.futurecdn.net/ujfM8sgekzFenoGfxLphhS-970-80.jpg.webp',
    requests: [{userId: 1, status: 'accepted'}, {userId: 2, status: 'accepted'}, {userId: 3, status: 'pending'}, {userId: 4, status: 'pending'}, {userId: 5, status: 'denied'}],
    users: [1,2],
    messages: [5, 6 ,7]
  }
]




let dummyProfiles = [
  {
    _id: 1,
  userId: 1,
  firstName: 'Clark',
  lastName: 'Kent',
  bio: 'Strong moral compass',
  photo: 'https://images.unsplash.com/photo-1590341328520-63256eb32bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  trips: [1, 2],
  notifications: [1, 2]
  },
  {
    _id: 2,
  userId: 2,
  firstName: 'Bruce',
  lastName: 'Wayne',
  bio: 'Slightly less strong moral compass',
  photo: 'https://images.unsplash.com/photo-1590341328520-63256eb32bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  trips: [1, 2],
  notifications: [3]
  },
  {
    _id: 3,
  userId: 3,
  firstName: 'Diana',
  lastName: 'Price',
  bio: 'Good at getting the truth out of people',
  photo: 'https://cdn.vox-cdn.com/thumbor/2aZdbHG9Cu-rvgtNvT7z88ZOB6o=/0x0:1280x640/920x613/filters:focal(467x58:671x262):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55115281/wonderwoman2.0.jpg',
  trips: [1, 2, 3],
  notifications: [4]
  },
  {
    _id: 4,
  userId: 4,
  firstName: 'John',
  lastName: 'Stewart',
  bio: 'Favorite color is orange',
  photo: 'https://static.wikia.nocookie.net/dcanimated/images/3/3d/John_Stewart_%28JL%29.png/revision/latest?cb=20191207103819',
  trips: [2, 4],
  notifications: [5]
  },
  {
    _id: 5,
  userId: 5,
  firstName: 'Barry',
  lastName: 'Allen',
  bio: 'Fast',
  photo: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/07/The-Flash-Seasons-Ranked-feature.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
  trips: [4, 3],
  notifications: [6, 7, 8]
  }
]











let dummyUserData = [
  {
    _id: 1,
    userId: 1,
    email: 'clark.kent@gotham.com',
    password: 'Martha1!',
    salt: 'whatissalt'
  },
  {
    _id: 2,
    userId: 2,
    email: 'bruce.wayne@gotham.com',
    password: 'AlsoMartha1!',
    salt: 'whatissalt'
  },
  {
    _id: 3,
    userId: 3,
    email: 'diana.prince@amazon.com',
    password: 'Truth1!',
    salt: 'whatissalt'
  },
  {
    _id: 4,
    userId: 4,
    email: 'john.stewart@gotham.com',
    password: 'Greenmachine1!',
    salt: 'whatissalt'
  },
  {
    _id: 5,
    userId: 5,
    email: 'barry.allen@gotham.com',
    password: 'SForce1!',
    salt: 'whatissalt'
  }
]


let dummyNotifications = [
  {
    userId: 1,
    tripId: 1,
    type: 'joinRequest',
    sender: 5
  },
  {
    userId: 2,
    tripId: 2,
    type: 'joinRequest',
    sender: 4
  },
  {
    userId: 2,
    tripId: 1,
    type: 'message',
    sender: 1
  },
  {
    userId: 2,
    tripId: 2,
    type: 'message',
    sender: 1
  },

]



Message.insertMany(dummyMessages)
  .then(response => {
    console.log('Inserted messages')
  })

Profile.insertMany(dummyProfiles)
.then(response => {
  console.log('Inserted profiles')
})

Trip.insertMany(dummyTrips)
.then(response => {
  console.log('Inserted trips')
})

UserData.insertMany(dummyUserData)
.then(response => {
  console.log('Inserted user data')
})

Notification.insertMany(dummyNotifications)
.then(response => {
  console.log('Inserted notifications')
})