import profileSchema from './schemas/profile.js';
import tripSchema from './schemas/trip.js';
import messageSchema from './schemas/message.js';
import notificationSchema from './schemas/notification.js';

import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/trippy';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.set('strictQuery', true);
mongoose.connect(url, options);


const Profile = new mongoose.model('Profile', profileSchema);
const Trip = new mongoose.model('Trip', tripSchema);
const Message = new mongoose.model('Message', messageSchema);
const Notification = new mongoose.model('Notification', notificationSchema);

let dummyMessages = [
  {
    _id: 1,
    tripId: 1,
    userId: 1,
    content: 'hello',
    createdAt: '2016-05-18T16:00:00Z',
  },
  {
    _id: 2,
    tripId: 1,
    userId: 2,
    content: 'nanananananaa',
    createdAt: '2016-05-18T16:00:00Z',
  },
  {
    _id: 3,
    tripId: 1,
    userId: 1,
    content: 'batman?',
    createdAt: '2016-05-18T16:00:00Z',
  },
  {
    _id: 4,
    tripId: 1,
    userId: 2,
    content: 'yes',
    createdAt: '2016-05-18T16:00:00Z',
  },
  {
    _id: 5,
    tripId: 2,
    userId: 1,
    content: 'hello',
    createdAt: '2016-05-18T16:00:00Z',
  },
  {
    _id: 6,
    tripId: 2,
    userId: 2,
    content: 'goodbye',
    createdAt: '2016-05-18T16:00:00Z',
  },
  {
    _id: 7,
    tripId: 2,
    userId: 1,
    content: 'fine then',
    createdAt: '2016-05-18T16:00:00Z',
  },
];

let dummyTrips = [
  {
    tripId: 1,
    ownerId: 1,
    tripTitle: 'Vacation in Smallville',
    destination: 'Smallville',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'helping with the farm',
    activities: ['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://flxt.tmsimg.com/assets/p7893454_b_v13_aa.jpg',
    requests: [
      { userId: 1, status: 'accepted' },
      { userId: 2, status: 'accepted' },
      { userId: 3, status: 'pending' },
      { userId: 4, status: 'denied' },
      { userId: 5, status: 'accepted' },
    ],
    users: [1, 2, 5],
    messages: [1, 2, 3, 4],
  },
  {
    tripId: 2,
    ownerId: 2,
    tripTitle: 'Vacation in Gotham City',
    destination: 'Gotham City',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'Help me solve a riddle',
    activities: ['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://cdn.mos.cms.futurecdn.net/ujfM8sgekzFenoGfxLphhS-970-80.jpg.webp',
    requests: [{userId: 5, status: true}],
    users: [1,2],
    messages: [5, 6 ,7]
  },
  {
    _id: 3,
    tripId: 3,
    ownerId: 3,
    tripTitle: 'Journey to Tuscany',
    destination: 'Tuscany, Italy',
    startDate: 'Jan 7, 2024 - Jan 10, 2024',
    endDate: 'Jan 7, 2024 - Jan 10, 2024',
    description: 'searching for sunflowers',
    activities:['fun stuff', 'other stuff'],
    budget: 3,
    photo:
      'https://cdn.mos.cms.futurecdn.net/ujfM8sgekzFenoGfxLphhS-970-80.jpg.webp',
    requests: [
      { userId: 1, status: 'accepted' },
      { userId: 2, status: 'accepted' },
      { userId: 3, status: 'pending' },
      { userId: 4, status: 'pending' },
      { userId: 5, status: 'denied' },
    ],
    users: [1, 2],
    messages: [5, 6, 7],
  },
];

let dummyProfiles = [
  {
    _id: 1,
    userId: 1,
    firstName: 'Clark',
    lastName: 'Kent',
    bio: 'Strong moral compass',
    photo:
      'https://images.unsplash.com/photo-1590341328520-63256eb32bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    trips: [1, 2],
    notifications: [1, 2],
  },
  {
    _id: 2,
    userId: 2,
    firstName: 'Bruce',
    lastName: 'Wayne',
    bio: 'Slightly less strong moral compass',
    photo:
      'https://images.unsplash.com/photo-1590341328520-63256eb32bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    trips: [1, 2],
    notifications: [3],
  },
  {
    _id: 3,
    userId: 3,
    firstName: 'Diana',
    lastName: 'Price',
    bio: 'Good at getting the truth out of people',
    photo:
      'https://cdn.vox-cdn.com/thumbor/2aZdbHG9Cu-rvgtNvT7z88ZOB6o=/0x0:1280x640/920x613/filters:focal(467x58:671x262):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55115281/wonderwoman2.0.jpg',
    trips: [1, 2, 3],
    notifications: [4],
  },
  {
    _id: 4,
    userId: 4,
    firstName: 'John',
    lastName: 'Stewart',
    bio: 'Favorite color is orange',
    photo:
      'https://static.wikia.nocookie.net/dcanimated/images/3/3d/John_Stewart_%28JL%29.png/revision/latest?cb=20191207103819',
    trips: [2, 4],
    notifications: [5],
  },
  {
    _id: 5,
    userId: 5,
    firstName: 'Barry',
    lastName: 'Allen',
    bio: 'Fast',
    photo:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/07/The-Flash-Seasons-Ranked-feature.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    trips: [4, 3],
    notifications: [6, 7, 8],
  },
];

let dummyUserData = [
  {
    _id: 1,
    userId: 1,
    email: 'clark.kent@gotham.com',
    password: 'Martha1!',
    salt: 'whatissalt',
  },
  {
    _id: 2,
    userId: 2,
    email: 'bruce.wayne@gotham.com',
    password: 'AlsoMartha1!',
    salt: 'whatissalt',
  },
  {
    _id: 3,
    userId: 3,
    email: 'diana.prince@amazon.com',
    password: 'Truth1!',
    salt: 'whatissalt',
  },
  {
    _id: 4,
    userId: 4,
    email: 'john.stewart@gotham.com',
    password: 'Greenmachine1!',
    salt: 'whatissalt',
  },
  {
    _id: 5,
    userId: 5,
    email: 'barry.allen@gotham.com',
    password: 'SForce1!',
    salt: 'whatissalt',
  },
];

let dummyNotifications = [
  {
    userId: 1,
    tripId: 1,
    type: 'joinRequest',
    sender: 5,
  },
  {
    userId: 2,
    tripId: 2,
    type: 'joinRequest',
    sender: 4,
  },
  {
    userId: 2,
    tripId: 1,
    type: 'message',
    sender: 1,
  },
  {
    userId: 2,
    tripId: 2,
    type: 'message',
    sender: 1,
  },
];


const profileData = [
  {
    "userId": "1",
    "firstName": "Clark",
    "lastName": "Kent",
    "bio": "minim adipisicing exercitation do deserunt cupidatat dolore adipisicing velit non id pariatur adipisicing ut aliqua dolor elit ullamco occaecat in irure duis pariatur amet adipisicing consequat dolor consectetur eu occaecat sint do fugiat qui esse labore reprehenderit proident non sunt aliquip dolore anim tempor ex irure nostrud ipsum occaecat laborum",
    "photo": "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "trips": [],
    "notifications": [1,2,3,4]
  },
  {
    "userId": "2",
    "firstName": "Bruce",
    "lastName": "Wayne",
    "bio": "labore commodo do ex duis fugiat sint pariatur irure ipsum et excepteur labore reprehenderit excepteur culpa occaecat fugiat enim nostrud consectetur sit sit enim ex in esse nulla nisi occaecat sit incididunt excepteur fugiat adipisicing quis id incididunt laboris irure exercitation ad non proident tempor Lorem aliquip amet occaecat nisi",
    "photo": "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "trips": [],
    "notifications": [5,6,7]
  },
  {
    "userId": "3",
    "firstName": "Diana",
    "lastName": "Prince",
    "bio": "pariatur voluptate tempor dolor et fugiat excepteur aliqua duis laboris voluptate dolor consequat mollit amet nisi magna dolore eiusmod est nisi dolor ut enim veniam dolore sunt quis amet elit officia minim nulla minim eu Lorem quis exercitation enim id officia nulla duis exercitation nisi sit ad anim duis do",
    "photo": "https://images.unsplash.com/photo-1621608035054-feb56e34cbc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80",
    "trips": [],
    "notifications": [8,9,10]
  },
  {
    "userId": "4",
    "firstName": "John",
    "lastName": "Stewart",
    "bio": "irure non excepteur adipisicing nulla qui sint qui excepteur minim consectetur mollit tempor mollit reprehenderit voluptate consectetur occaecat aliquip enim laboris pariatur nostrud duis irure ut occaecat id exercitation cillum do ex velit fugiat tempor labore incididunt ullamco ipsum tempor non cillum Lorem ut quis minim in sunt adipisicing nisi",
    "photo": "https://images.unsplash.com/photo-1588693495198-68a5d66c60bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "trips": [],
    "notifications": [11,12,13]
  },
  {
    "userId": "5",
    "firstName": "Barry",
    "lastName": "Allen",
    "bio": "dolore nisi ad do velit minim elit in deserunt id duis magna fugiat Lorem nostrud Lorem in ad laborum nulla excepteur occaecat irure nostrud reprehenderit aliquip non dolore elit non duis eiusmod veniam dolor ex cupidatat aute excepteur aliquip pariatur deserunt esse non in velit dolore ex laboris do ipsum",
    "photo": "https://images.unsplash.com/photo-1511289081-d06dda19034d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwZmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "trips": [],
    "notifications": [14,15,16]
  },
  {
    "userId": "6",
    "firstName": "Anita",
    "lastName": "Cannon",
    "bio": "laborum sint quis eiusmod laborum nulla tempor deserunt amet et qui non officia in anim labore quis Lorem laboris excepteur ex velit ex sunt cupidatat et veniam dolore voluptate commodo nostrud aliqua laboris duis sint nostrud id consequat eiusmod Lorem velit eu cupidatat ipsum ullamco pariatur qui id elit aliquip",
    "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "trips": [],
    "notifications": [17,18]
  },
  {
    "userId": "7",
    "firstName": "Angelina",
    "lastName": "Mercer",
    "bio": "proident id enim magna quis incididunt ullamco eu velit qui voluptate quis nulla minim sit quis amet qui commodo aliqua in fugiat velit quis adipisicing in ea do nostrud veniam nulla proident laboris eiusmod amet reprehenderit non irure sit ipsum ipsum ipsum est culpa amet exercitation incididunt ullamco deserunt exercitation",
    "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "trips": [],
    "notifications": [19]
  },
  {
    "userId": "8",
    "firstName": "Warren",
    "lastName": "Osborn",
    "bio": "ea deserunt magna sit magna irure irure id id pariatur culpa do magna velit anim proident cupidatat ad commodo et eiusmod incididunt fugiat officia cillum eu minim magna veniam nisi eu Lorem est culpa sit mollit eu incididunt ut pariatur consequat minim duis aliqua voluptate et do quis cillum non",
    "photo": "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "trips": [],
    "notifications": []
  }
]



























































const notificationData = [
  {
    "userId": "7",
    "tripId": "8",
    "type": "joinTrip",
    "sender": "7"
  },
  {
    "userId": "8",
    "tripId": "13",
    "type": "message",
    "sender": "4"
  },
  {
    "userId": "7",
    "tripId": "5",
    "type": "message",
    "sender": "3"
  },
  {
    "userId": "5",
    "tripId": "3",
    "type": "message",
    "sender": "2"
  },
  {
    "userId": "5",
    "tripId": "1",
    "type": "joinRequest",
    "sender": "1"
  },
  {
    "userId": "4",
    "tripId": "6",
    "type": "message",
    "sender": "6"
  },
  {
    "userId": "2",
    "tripId": "1",
    "type": "message",
    "sender": "4"
  },
  {
    "userId": "5",
    "tripId": "10",
    "type": "joinTrip",
    "sender": "1"
  },
  {
    "userId": "1",
    "tripId": "12",
    "type": "joinRequest",
    "sender": "8"
  },
  {
    "userId": "7",
    "tripId": "1",
    "type": "joinTrip",
    "sender": "4"
  },
  {
    "userId": "6",
    "tripId": "1",
    "type": "joinRequest",
    "sender": "3"
  },
  {
    "userId": "4",
    "tripId": "1",
    "type": "message",
    "sender": "8"
  },
  {
    "userId": "5",
    "tripId": "8",
    "type": "joinTrip",
    "sender": "1"
  },
  {
    "userId": "2",
    "tripId": "11",
    "type": "message",
    "sender": "4"
  },
  {
    "userId": "2",
    "tripId": "10",
    "type": "joinTrip",
    "sender": "8"
  },
  {
    "userId": "1",
    "tripId": "12",
    "type": "joinTrip",
    "sender": "3"
  },
  {
    "userId": "2",
    "tripId": "10",
    "type": "joinTrip",
    "sender": "2"
  },
  {
    "userId": "1",
    "tripId": "4",
    "type": "joinTrip",
    "sender": "3"
  },
  {
    "userId": "8",
    "tripId": "9",
    "type": "message",
    "sender": "4"
  },
  {
    "userId": "2",
    "tripId": "2",
    "type": "message",
    "sender": "3"
  },
  {
    "userId": "7",
    "tripId": "9",
    "type": "message",
    "sender": "7"
  },
  {
    "userId": "6",
    "tripId": "11",
    "type": "joinTrip",
    "sender": "4"
  },
  {
    "userId": "4",
    "tripId": "3",
    "type": "joinRequest",
    "sender": "6"
  },
  {
    "userId": "4",
    "tripId": "2",
    "type": "message",
    "sender": "8"
  },
  {
    "userId": "3",
    "tripId": "3",
    "type": "message",
    "sender": "6"
  },
  {
    "userId": "3",
    "tripId": "9",
    "type": "joinTrip",
    "sender": "3"
  },
  {
    "userId": "2",
    "tripId": "6",
    "type": "joinRequest",
    "sender": "8"
  },
  {
    "userId": "4",
    "tripId": "12",
    "type": "joinRequest",
    "sender": "7"
  },
  {
    "userId": "7",
    "tripId": "9",
    "type": "joinTrip",
    "sender": "8"
  },
  {
    "userId": "6",
    "tripId": "10",
    "type": "joinTrip",
    "sender": "8"
  },
  {
    "userId": "8",
    "tripId": "4",
    "type": "joinTrip",
    "sender": "7"
  },
  {
    "userId": "2",
    "tripId": "5",
    "type": "joinRequest",
    "sender": "6"
  },
  {
    "userId": "7",
    "tripId": "12",
    "type": "joinRequest",
    "sender": "4"
  },
  {
    "userId": "4",
    "tripId": "4",
    "type": "joinRequest",
    "sender": "5"
  },
  {
    "userId": "6",
    "tripId": "13",
    "type": "message",
    "sender": "4"
  },
  {
    "userId": "8",
    "tripId": "12",
    "type": "message",
    "sender": "7"
  },
  {
    "userId": "7",
    "tripId": "13",
    "type": "joinRequest",
    "sender": "2"
  },
  {
    "userId": "4",
    "tripId": "7",
    "type": "message",
    "sender": "7"
  },
  {
    "userId": "4",
    "tripId": "3",
    "type": "joinTrip",
    "sender": "5"
  },
  {
    "userId": "3",
    "tripId": "5",
    "type": "joinRequest",
    "sender": "7"
  }
]


















const messageData = [
  {
    "userId": "1",
    "tripId": "1",
    "content": "occaecat do cupidatat aute dolore ullamco qui qui exercitation velit irure sint magna ut laboris",
    "createdAt": "2023-01-08T05:20:28.029Z"
  },
  {
    "userId": "2",
    "tripId": "1",
    "content": "ad labore commodo occaecat sit ea exercitation consectetur",
    "createdAt": "2023-01-17T16:10:06.214Z"
  },
  {
    "userId": "1",
    "tripId": "1",
    "content": "id commodo culpa fugiat velit ea adipisicing eu mollit ullamco consectetur sint dolor excepteur proident nostrud reprehenderit eiusmod sint fugiat id elit minim amet ullamco dolor pariatur nulla",
    "createdAt": "2023-01-10T10:09:15.841Z"
  },
  {
    "userId": "2",
    "tripId": "1",
    "content": "aliquip ea pariatur consequat est dolore nulla pariatur",
    "createdAt": "2023-01-04T23:19:34.007Z"
  },
  {
    "userId": "3",
    "tripId": "1",
    "content": "qui elit incididunt pariatur nostrud consequat occaecat eu Lorem ad fugiat et eu reprehenderit nisi voluptate elit quis dolore magna cillum laborum minim minim",
    "createdAt": "2023-01-01T00:33:56.512Z"
  },
  {
    "userId": "1",
    "tripId": "1",
    "content": "sint irure qui do commodo incididunt magna proident est dolore ea magna labore",
    "createdAt": "2023-01-16T23:21:34.097Z"
  },
  {
    "userId": "1",
    "tripId": "1",
    "content": "ut magna cupidatat exercitation non quis excepteur deserunt enim sint nulla elit veniam officia",
    "createdAt": "2023-01-03T23:22:20.586Z"
  },
  {
    "userId": "2",
    "tripId": "1",
    "content": "laborum sunt Lorem fugiat quis quis proident veniam exercitation est ad nisi sunt irure",
    "createdAt": "2023-01-05T20:08:36.703Z"
  },
  {
    "userId": "2",
    "tripId": "1",
    "content": "dolor nisi magna consectetur et consectetur in et",
    "createdAt": "2023-01-17T02:08:10.389Z"
  },
  {
    "userId": "3",
    "tripId": "1",
    "content": "velit nisi adipisicing laboris dolore deserunt eu ea cupidatat tempor enim excepteur ullamco cillum veniam nostrud pariatur quis tempor occaecat",
    "createdAt": "2023-01-04T05:31:43.630Z"
  },
  {
    "userId": "3",
    "tripId": "2",
    "content": "cillum nostrud nisi fugiat eu amet enim incididunt qui elit Lorem quis sint in eu est culpa enim ut cupidatat",
    "createdAt": "2023-01-03T06:49:07.094Z"
  },
  {
    "userId": "4",
    "tripId": "2",
    "content": "cupidatat Lorem sit adipisicing sunt pariatur ad magna occaecat labore elit sint irure nisi",
    "createdAt": "2023-01-06T18:22:22.272Z"
  },
  {
    "userId": "5",
    "tripId": "2",
    "content": "culpa anim velit nisi Lorem aliqua anim eu in ad nostrud in cillum ipsum ut exercitation sunt reprehenderit aliqua excepteur est dolor sit laborum irure veniam minim ut officia",
    "createdAt": "2023-01-08T08:29:18.677Z"
  },
  {
    "userId": "5",
    "tripId": "3",
    "content": "adipisicing cupidatat exercitation laboris id",
    "createdAt": "2023-01-11T23:56:43.788Z"
  },
  {
    "userId": "2",
    "tripId": "3",
    "content": "excepteur amet anim culpa nostrud tempor adipisicing aliqua consequat mollit nulla Lorem exercitation nulla nisi nulla ea dolore qui id dolore sit",
    "createdAt": "2023-01-02T19:52:34.508Z"
  },
  {
    "userId": "2",
    "tripId": "4",
    "content": "aliquip laboris cupidatat Lorem sint velit ut nulla deserunt commodo est mollit voluptate aute exercitation incididunt nostrud ullamco eiusmod sit",
    "createdAt": "2023-01-07T16:37:01.064Z"
  },
  {
    "userId": "6",
    "tripId": "1",
    "content": "do eiusmod ipsum anim adipisicing qui laboris officia esse fugiat cupidatat eiusmod culpa sint laborum",
    "createdAt": "2023-01-02T06:55:46.057Z"
  },
  {
    "userId": "3",
    "tripId": "2",
    "content": "exercitation cillum sunt Lorem amet dolor tempor minim ipsum veniam occaecat cillum pariatur ut",
    "createdAt": "2023-01-15T19:16:06.330Z"
  },
  {
    "userId": "4",
    "tripId": "2",
    "content": "anim sunt incididunt ullamco reprehenderit proident id in anim mollit minim ex deserunt velit adipisicing exercitation minim officia",
    "createdAt": "2023-01-17T00:08:41.643Z"
  },
  {
    "userId": "5",
    "tripId": "3",
    "content": "minim nulla qui qui adipisicing fugiat deserunt enim dolore duis incididunt amet ex aute dolore",
    "createdAt": "2023-01-07T11:22:33.584Z"
  },
  {
    "userId": "4",
    "tripId": "1",
    "content": "elit exercitation tempor velit est voluptate incididunt deserunt ullamco officia qui amet quis qui id veniam est elit incididunt adipisicing sit in",
    "createdAt": "2023-01-16T02:03:29.965Z"
  },
  {
    "userId": "5",
    "tripId": "2",
    "content": "aliqua consectetur dolor est consequat anim est ad minim irure non nisi sint pariatur aliquip id tempor",
    "createdAt": "2023-01-14T10:25:55.817Z"
  },
  {
    "userId": "5",
    "tripId": "2",
    "content": "sunt laborum velit laborum sunt laboris dolore esse ipsum est",
    "createdAt": "2023-01-05T14:52:20.292Z"
  },
  {
    "userId": "5",
    "tripId": "2",
    "content": "culpa irure sit qui irure sit magna culpa consequat enim aute voluptate mollit aute fugiat amet ullamco enim irure",
    "createdAt": "2023-01-05T22:49:59.877Z"
  },
  {
    "userId": "2",
    "tripId": "2",
    "content": "laboris anim tempor irure magna elit velit occaecat sint deserunt do ea duis cupidatat ipsum ullamco ullamco ullamco officia nisi anim Lorem proident ea nulla dolor cillum officia",
    "createdAt": "2023-01-16T15:20:22.862Z"
  },
  {
    "userId": "3",
    "tripId": "2",
    "content": "esse est cupidatat ut aliqua veniam qui ipsum cupidatat labore nulla cillum consequat sit est proident occaecat",
    "createdAt": "2023-01-12T01:21:23.039Z"
  },
  {
    "userId": "3",
    "tripId": "1",
    "content": "ullamco anim commodo est elit qui minim labore amet aliquip anim quis dolore amet deserunt minim reprehenderit officia sint voluptate",
    "createdAt": "2023-01-09T06:08:44.504Z"
  },
  {
    "userId": "5",
    "tripId": "2",
    "content": "cupidatat exercitation culpa minim non do sint incididunt et nulla laborum magna nostrud qui excepteur enim sint non deserunt elit anim laborum fugiat sint commodo consequat consequat Lorem amet",
    "createdAt": "2023-01-11T04:48:30.482Z"
  },
  {
    "userId": "3",
    "tripId": "4",
    "content": "eiusmod aliqua ullamco ipsum cillum laboris anim excepteur veniam nostrud ea cupidatat minim sit culpa",
    "createdAt": "2023-01-05T10:53:33.673Z"
  },
  {
    "userId": "5",
    "tripId": "2",
    "content": "consectetur ullamco irure incididunt in proident laborum officia duis do do cupidatat occaecat adipisicing qui labore do ullamco laboris esse officia est mollit aute elit aliqua laborum deserunt est",
    "createdAt": "2023-01-07T21:02:50.533Z"
  },
  {
    "userId": "1",
    "tripId": "1",
    "content": "exercitation eiusmod id id qui cupidatat est nisi culpa velit reprehenderit magna",
    "createdAt": "2023-01-07T16:07:27.621Z"
  },
  {
    "userId": "1",
    "tripId": "2",
    "content": "ullamco irure ut minim sint",
    "createdAt": "2023-01-02T21:50:14.037Z"
  },
  {
    "userId": "3",
    "tripId": "1",
    "content": "voluptate irure aliquip reprehenderit dolore commodo sit velit reprehenderit incididunt reprehenderit non eiusmod ad sunt laboris tempor occaecat eu incididunt officia non tempor proident pariatur ut cupidatat tempor",
    "createdAt": "2023-01-08T00:21:27.034Z"
  },
  {
    "userId": "2",
    "tripId": "3",
    "content": "esse ad officia in esse nostrud voluptate Lorem excepteur dolor esse commodo nostrud excepteur magna",
    "createdAt": "2023-01-05T20:52:10.650Z"
  },
  {
    "userId": "4",
    "tripId": "2",
    "content": "sit sunt ullamco pariatur laborum dolore deserunt officia et",
    "createdAt": "2023-01-05T18:32:18.267Z"
  },
  {
    "userId": "1",
    "tripId": "1",
    "content": "cillum esse consequat commodo ex",
    "createdAt": "2023-01-09T01:44:42.696Z"
  },
  {
    "userId": "1",
    "tripId": "2",
    "content": "Lorem irure velit Lorem fugiat ex exercitation officia tempor dolor aliqua enim aliqua exercitation duis cillum elit",
    "createdAt": "2023-01-09T07:21:26.745Z"
  },
  {
    "userId": "3",
    "tripId": "2",
    "content": "cillum ea veniam elit magna elit aute",
    "createdAt": "2023-01-16T13:20:36.355Z"
  },
  {
    "userId": "1",
    "tripId": "4",
    "content": "aliqua aliquip sint magna ea duis occaecat aliquip irure",
    "createdAt": "2023-01-06T02:35:58.398Z"
  },
  {
    "userId": "2",
    "tripId": "1",
    "content": "laboris do minim elit qui ad ipsum qui fugiat voluptate laborum laborum sit",
    "createdAt": "2023-01-13T06:45:02.110Z"
  }
]


















































const tripData = [
  {
    "ownerId": "3",
    "tripTitle": "Tempor minim consequat eu reprehenderit proident.",
    "destination": "Jeff, Pitcairn",
    "startDate": "2023-02-20T07:15:28.126Z",
    "endDate": "2023-02-02T19:49:45.219Z",
    "description": "officia minim culpa eu ad elit amet consequat ipsum aliqua fugiat eiusmod pariatur do sit cillum aliquip elit fugiat mollit",
    "budget": 2,
    "photo": "https://i.picsum.photos/id/136/200/200.jpg?hmac=m5kYXq4zQR742H2cLvYw6nX1cJ65qKBb-kY84CbGCaQ",
    "activities": [
      "Enim pariatur sunt ut fugiat mollit ullamco amet dolore proident enim.",
      "Ad sit culpa ad fugiat.",
      "Proident elit pariatur ipsum consectetur excepteur aliquip proident est in culpa anim est ad.",
      "Elit consectetur excepteur eiusmod esse ad qui occaecat sit commodo anim pariatur.",
      "Esse culpa amet consequat pariatur nostrud.",
      "Consequat consectetur esse ut adipisicing laborum dolor quis enim et in exercitation."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "3"
    ],
    "messages": []
  },
  {
    "ownerId": "6",
    "tripTitle": "Ipsum aliquip pariatur ullamco nulla dolor cillum tempor fugiat id duis dolor in.",
    "destination": "Hessville, Gibraltar",
    "startDate": "2023-02-19T21:56:21.711Z",
    "endDate": "2023-03-07T01:21:50.150Z",
    "description": "laborum reprehenderit ea ad elit reprehenderit fugiat labore qui esse dolore occaecat adipisicing do excepteur aliqua ea cillum veniam fugiat velit cillum sint in excepteur magna",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/152/400/400.jpg?hmac=Utl43XvmEyT1dGXdMw6eJLoeIn_1eLZ49wpZqTI9Nrw",
    "activities": [
      "Occaecat adipisicing sint sit in fugiat deserunt pariatur dolore.",
      "Nisi reprehenderit id nisi ut excepteur enim nisi officia aliqua enim aliquip.",
      "Reprehenderit ex consequat est consectetur voluptate occaecat sit id non eu magna nulla.",
      "Nostrud anim officia elit duis commodo.",
      "Exercitation deserunt duis eu incididunt."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "7",
      "4",
      "7",
      "3",
      "1"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Id labore exercitation sint magna voluptate.",
    "destination": "Downsville, Turks and Caicos Islands",
    "startDate": "2023-02-11T05:36:11.379Z",
    "endDate": "2023-03-09T18:22:39.421Z",
    "description": "mollit velit sint magna duis et anim ea eiusmod irure non nisi nulla est Lorem duis irure eiusmod dolore incididunt est eiusmod in qui elit esse tempor cupidatat eu velit commodo",
    "budget": 1,
    "photo": "https://i.picsum.photos/id/737/400/400.jpg?hmac=X3PgjnQsTxQJNaxmk0fjtfJ1NlSaM1dzCNBNqDK_XSY",
    "activities": [
      "Pariatur ea esse consequat minim consectetur esse id aliquip aliquip minim et duis esse tempor.",
      "In amet id culpa nostrud do aute commodo sit elit incididunt enim nostrud.",
      "Tempor consequat anim eiusmod anim do voluptate id aute cillum laborum quis.",
      "Id cillum enim labore sint velit irure consequat sit.",
      "Laboris laboris dolor velit mollit elit minim ea voluptate amet non.",
      "Et do ullamco reprehenderit nulla laboris qui commodo cillum deserunt minim consequat labore ipsum ad.",
      "Tempor minim nisi esse consequat."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "1"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Qui consequat cupidatat dolor eu incididunt consectetur culpa nostrud laboris eu.",
    "destination": "Kohatk, Cambodia",
    "startDate": "2023-02-23T09:38:02.776Z",
    "endDate": "2023-02-27T11:46:33.682Z",
    "description": "ea magna velit eiusmod ipsum mollit id mollit elit aliquip ex et in aliquip amet sit commodo consectetur tempor et magna in tempor pariatur id enim excepteur aute",
    "budget": 3,
    "photo": "https://i.picsum.photos/id/163/400/400.jpg?hmac=vbC0b6xvbaN842dzKg0CicQHDcBu13meSCQeHh-aJrs",
    "activities": [
      "Proident consequat officia eu cillum officia consectetur laboris deserunt eu aliqua ad laborum.",
      "Sit dolor irure deserunt incididunt.",
      "Occaecat magna excepteur nisi duis ut pariatur duis consectetur ex esse aliqua occaecat in.",
      "Elit ea aliqua magna cupidatat dolore occaecat deserunt tempor minim ad.",
      "Commodo sunt irure proident reprehenderit sit deserunt amet deserunt eu laborum.",
      "Commodo adipisicing aute deserunt magna est aliqua."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "8",
      "8",
      "4",
      "3",
      "2"
    ],
    "messages": []
  },
  {
    "ownerId": "7",
    "tripTitle": "Reprehenderit proident qui pariatur anim veniam ipsum dolor Lorem excepteur nulla officia officia aute irure.",
    "destination": "Bynum, Ethiopia",
    "startDate": "2023-02-18T04:08:02.678Z",
    "endDate": "2023-03-05T18:21:14.065Z",
    "description": "ex commodo ut id ullamco sint id commodo nostrud consequat dolore cillum nostrud ad elit tempor amet officia magna excepteur qui velit officia sunt tempor non cillum dolor labore sit esse amet nisi aute nulla laborum enim Lorem amet",
    "budget": 1,
    "photo": "https://i.picsum.photos/id/420/400/400.jpg?hmac=5nnQHRCp3Rlv5B8gvt8RQD5mKQ2cZcjO964WNI498Wk",
    "activities": [
      "Laborum minim Lorem voluptate consectetur.",
      "Magna irure ullamco qui consectetur occaecat pariatur.",
      "Non voluptate commodo pariatur velit ut nulla eiusmod sint occaecat eiusmod minim irure aliquip quis.",
      "Tempor do esse magna id.",
      "Id eu ullamco quis quis exercitation veniam aliqua irure.",
      "Laborum veniam ullamco cupidatat incididunt."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "5",
      "8",
      "6",
      "7"
    ],
    "messages": []
  },
  {
    "ownerId": "6",
    "tripTitle": "In eu consequat tempor duis quis aliquip nisi culpa duis nostrud laborum ullamco aute.",
    "destination": "Greer, Italy",
    "startDate": "2023-01-27T02:12:16.230Z",
    "endDate": "2023-02-16T21:52:22.215Z",
    "description": "culpa veniam laboris consequat officia sunt ut fugiat nostrud non irure do velit et eu ad anim nisi ipsum ut pariatur laboris minim",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/53/400/400.jpg?hmac=83CrV7C8gr1Wp9_cBL0DhjKT03eyOshiSDQhlEAs3_c",
    "activities": [
      "Quis anim anim quis amet aliqua qui.",
      "Ullamco nostrud ipsum consectetur irure.",
      "Reprehenderit commodo magna amet do dolore.",
      "Anim laborum ad commodo ad magna excepteur anim cupidatat veniam.",
      "Ipsum ut fugiat anim aliqua nisi do in sit ut consectetur esse eu."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "4",
      "3",
      "1"
    ],
    "messages": []
  },
  {
    "ownerId": "8",
    "tripTitle": "Sit sit fugiat dolor est ut magna nulla duis tempor.",
    "destination": "Moraida, Kuwait",
    "startDate": "2023-02-12T16:03:52.200Z",
    "endDate": "2023-03-27T10:08:57.232Z",
    "description": "et qui eu non nulla mollit sunt ullamco anim qui occaecat sit laborum ipsum eu mollit esse ea nisi reprehenderit aliquip quis laboris Lorem anim excepteur id ut aliquip",
    "budget": 2,
    "photo": "https://i.picsum.photos/id/654/400/400.jpg?hmac=UcqJyV25jx-5anzH45PpNJsU8wLwVoy7HOr2C16v17Q",
    "activities": [
      "Nostrud velit sunt sint voluptate non duis cupidatat deserunt velit commodo."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "7"
    ],
    "messages": []
  },
  {
    "ownerId": "8",
    "tripTitle": "Labore cupidatat voluptate est eiusmod do officia minim nisi eu ad consequat in deserunt nostrud.",
    "destination": "Henrietta, Taiwan",
    "startDate": "2023-02-12T03:43:04.311Z",
    "endDate": "2023-02-13T13:14:51.570Z",
    "description": "et aute aliqua ex mollit enim reprehenderit qui eiusmod minim laboris aliqua ea cupidatat occaecat occaecat amet irure consequat deserunt laborum enim nisi aliquip fugiat aliquip",
    "budget": 1,
    "photo": "https://i.picsum.photos/id/434/400/400.jpg?hmac=VO0lTm9WaYrttLNrBC-5WpAvabgYLLuOOZAuXsC0Kv8",
    "activities": [
      "Occaecat fugiat ullamco id duis fugiat laboris sit elit id ipsum.",
      "Deserunt eu magna dolor reprehenderit reprehenderit id quis veniam duis in tempor.",
      "Mollit dolor voluptate mollit incididunt Lorem sint magna Lorem est excepteur do culpa.",
      "Veniam ut dolore deserunt aliquip consequat voluptate mollit Lorem nostrud voluptate reprehenderit nulla exercitation.",
      "Est elit cupidatat ipsum ullamco minim id non ea reprehenderit proident duis culpa consequat aliquip.",
      "Anim officia esse anim cillum irure proident.",
      "Cupidatat eiusmod amet elit id dolor fugiat est ad."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "6",
      "7"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Aliquip Lorem laboris irure cupidatat fugiat do nulla adipisicing consectetur Lorem duis fugiat.",
    "destination": "Ballico, Papua New Guinea",
    "startDate": "2023-02-01T18:02:29.665Z",
    "endDate": "2023-02-16T12:33:16.549Z",
    "description": "dolor eu labore excepteur eiusmod cupidatat officia magna id amet laboris incididunt elit laboris est duis nostrud sint eiusmod ipsum ut in anim aliquip sunt velit cillum elit aliquip aute consequat magna laborum magna excepteur nostrud ipsum",
    "budget": 2,
    "photo": "https://i.picsum.photos/id/71/400/400.jpg?hmac=jwnuiCB39VWvyS6KUQzh4eAnaboQj7UDxlYqKXCceBU",
    "activities": [
      "Proident adipisicing id fugiat nisi labore adipisicing ullamco.",
      "Dolor culpa et est ut cillum sint anim Lorem.",
      "Cupidatat nulla culpa labore fugiat sint sit est dolor irure dolore irure minim.",
      "Aliquip et nostrud excepteur anim anim ex ex nisi.",
      "Sunt veniam voluptate anim laborum qui voluptate aliquip eu nostrud dolore velit ullamco.",
      "Cupidatat sunt tempor anim id dolor labore incididunt dolore minim."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "2",
      "2"
    ],
    "messages": []
  },
  {
    "ownerId": "5",
    "tripTitle": "Adipisicing officia officia esse tempor voluptate ipsum mollit aliqua.",
    "destination": "Chapin, Burundi",
    "startDate": "2023-02-20T04:20:00.406Z",
    "endDate": "2023-02-08T21:20:22.260Z",
    "description": "irure in ex laboris anim Lorem duis sint ex sunt commodo cupidatat ex ea incididunt sint sit id sint est mollit officia irure tempor qui pariatur veniam et consequat non",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/1042/400/400.jpg?hmac=_iucsj9MT7dB95ggxnzw0_ozB7IiU-ZYIddcSQsGn9Q",
    "activities": [
      "Est deserunt adipisicing est nulla aute officia id.",
      "Culpa enim mollit occaecat amet occaecat."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "2",
      "3"
    ],
    "messages": []
  },
  {
    "ownerId": "3",
    "tripTitle": "Exercitation reprehenderit proident exercitation nisi consectetur ut dolore quis id ut elit.",
    "destination": "Cazadero, Djibouti",
    "startDate": "2023-01-22T21:05:02.792Z",
    "endDate": "2023-02-19T09:05:42.683Z",
    "description": "mollit non sint excepteur magna qui proident duis est minim sint enim proident magna proident occaecat enim laboris sit occaecat duis Lorem sint cupidatat consequat esse laboris labore est ullamco do sunt ipsum adipisicing dolore culpa aute consequat culpa occaecat in amet aliquip eiusmod voluptate et fugiat elit minim eiusmod irure qui eiusmod magna et quis consectetur ipsum deserunt aute",
    "budget": 3,
    "photo": "https://i.picsum.photos/id/15/400/400.jpg?hmac=xv-6mggpYPLIQ9eNAHrl1qKPHjyUCYlBoNBvdsqF4cY",
    "activities": [
      "Exercitation veniam occaecat minim veniam duis aliqua Lorem consectetur eu irure.",
      "Ullamco adipisicing ex labore sit consequat nulla.",
      "Elit non eu deserunt aliquip elit elit eu mollit.",
      "Nostrud sint consequat culpa ad esse occaecat ea veniam ullamco irure.",
      "Eiusmod fugiat eu consectetur do esse occaecat enim ea proident nisi dolor.",
      "Culpa sit deserunt non cupidatat incididunt aliquip labore do fugiat voluptate."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "7",
      "8",
      "4"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Aliqua in do proident sit proident ipsum quis exercitation esse exercitation laboris in ullamco sunt.",
    "destination": "Ada, Tanzania",
    "startDate": "2023-01-26T08:51:34.900Z",
    "endDate": "2023-03-01T12:44:14.143Z",
    "description": "anim esse consequat exercitation Lorem culpa sunt cillum aliquip officia dolore do fugiat magna amet pariatur elit amet eiusmod tempor veniam cupidatat voluptate consequat excepteur occaecat",
    "budget": 2,
    "photo": "https://i.picsum.photos/id/961/400/400.jpg?hmac=dyulvluBagnUklUX7Jn3uJRNVPiBCkI6sxlGSXhAKC8",
    "activities": [
      "Adipisicing officia nisi velit deserunt.",
      "Veniam enim aliqua laborum cillum cillum minim sunt elit non id consectetur.",
      "Sint pariatur aliqua do et laboris cupidatat excepteur ipsum esse cillum.",
      "Consequat cupidatat ad aliqua aliquip aliquip.",
      "Cillum reprehenderit occaecat tempor nostrud dolor adipisicing consequat magna incididunt."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "5",
      "7",
      "6"
    ],
    "messages": []
  },
  {
    "ownerId": "8",
    "tripTitle": "Culpa enim aliquip mollit dolor labore ea ut et duis officia id.",
    "destination": "Juntura, Yugoslavia",
    "startDate": "2023-01-22T04:32:40.642Z",
    "endDate": "2023-03-13T04:20:15.422Z",
    "description": "magna laborum magna eu tempor ea culpa quis qui occaecat cillum labore esse ut consectetur aute nisi fugiat exercitation consectetur occaecat sit irure dolore veniam anim aliqua et aliquip sint amet et sunt veniam pariatur et fugiat amet commodo ipsum irure adipisicing elit excepteur minim deserunt minim id",
    "budget": 4,
    "photo": "https://i.picsum.photos/id/548/400/400.jpg?hmac=OaSyHU90agBHQ4eS12WOSVPaYFvR6UEKt1e1lbFCi9s",
    "activities": [
      "Labore ex aliqua Lorem commodo dolore consequat Lorem sint."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "3",
      "3"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Ad laboris nisi sunt enim sint quis aliqua sit anim commodo magna ex laboris amet.",
    "destination": "Coventry, Saint Lucia",
    "startDate": "2023-02-14T13:31:48.311Z",
    "endDate": "2023-02-13T22:47:43.353Z",
    "description": "est irure voluptate ipsum cillum mollit laboris velit eiusmod nulla officia mollit labore ut aliquip sint irure pariatur deserunt sint laborum mollit laboris elit est et eiusmod dolore sit adipisicing cupidatat magna sit laborum proident aute sunt nostrud ea amet adipisicing pariatur est",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/735/400/400.jpg?hmac=6W-K0BM-u_Io4ipaNNuwivJqOfHoa-1zFSKl67jHJ0U",
    "activities": [
      "Irure ut cupidatat incididunt ex non eu magna nulla est do et sunt.",
      "Lorem irure culpa et qui deserunt occaecat sunt occaecat ea dolore labore.",
      "Adipisicing sunt ut velit culpa elit qui in magna ut veniam nisi.",
      "Velit dolor dolore ut commodo laboris occaecat exercitation.",
      "Non eiusmod mollit elit reprehenderit ea cillum sint."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "5",
      "7",
      "8"
    ],
    "messages": []
  },
  {
    "ownerId": "3",
    "tripTitle": "Cupidatat reprehenderit adipisicing do minim mollit nulla minim ullamco laborum pariatur ut.",
    "destination": "Glidden, Guinea-Bissau",
    "startDate": "2023-02-08T02:38:32.158Z",
    "endDate": "2023-03-29T10:57:43.720Z",
    "description": "exercitation enim enim do consequat in voluptate pariatur sint voluptate occaecat ea qui nostrud tempor ut est consequat ea aliqua sit do eiusmod labore ipsum",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/698/400/400.jpg?hmac=kasxWrVFN3sq0wDVITf2bexMkBnylCOlCYz-Ee5axWU",
    "activities": [
      "Pariatur ad cillum in velit mollit do nulla occaecat culpa qui labore excepteur sint consequat.",
      "Laborum cupidatat est amet laboris reprehenderit aliqua qui."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "7",
      "6",
      "3"
    ],
    "messages": []
  },
  {
    "ownerId": "3",
    "tripTitle": "Duis commodo in dolore cupidatat cupidatat ullamco consectetur est et.",
    "destination": "Belleview, American Samoa",
    "startDate": "2023-01-31T14:55:16.543Z",
    "endDate": "2023-03-16T00:08:50.549Z",
    "description": "excepteur magna sint consectetur officia esse eu voluptate nostrud pariatur laborum sint labore nostrud in anim sunt quis eiusmod laboris incididunt ex enim do eu Lorem mollit elit dolor veniam elit sit do adipisicing proident eu ad incididunt tempor quis ea non fugiat veniam",
    "budget": 4,
    "photo": "https://i.picsum.photos/id/853/400/400.jpg?hmac=hrXt2bG2amTk7vC0pmDOJV9C9ZUWbHsuXYpIB3jUkjo",
    "activities": [
      "Est incididunt ad cillum quis aliquip occaecat ullamco adipisicing aute tempor pariatur.",
      "Pariatur consectetur incididunt quis culpa esse aliqua occaecat magna.",
      "Veniam quis proident eiusmod magna laborum proident laborum."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "7",
      "4",
      "1",
      "2"
    ],
    "messages": []
  },
  {
    "ownerId": "4",
    "tripTitle": "Ut pariatur aliqua commodo proident nisi dolor excepteur.",
    "destination": "Coinjock, Slovak Republic",
    "startDate": "2023-01-30T11:05:50.223Z",
    "endDate": "2023-02-09T20:47:00.883Z",
    "description": "mollit duis esse tempor velit nisi aliquip enim amet officia sint ipsum quis culpa amet nisi culpa dolor voluptate consequat veniam sit elit commodo fugiat occaecat dolor culpa tempor enim aute elit nisi reprehenderit velit voluptate amet velit officia esse laborum sunt id",
    "budget": 4,
    "photo": "https://i.picsum.photos/id/887/400/400.jpg?hmac=aA-HVGY2SA1veCKGXgNniBM1RgES3N1TSMRa5QdDNdo",
    "activities": [
      "Aliqua sit esse incididunt id tempor pariatur cupidatat do.",
      "Qui magna culpa id quis irure."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "5",
      "1"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Minim Lorem cillum occaecat reprehenderit ipsum elit voluptate laborum proident.",
    "destination": "Grayhawk, Jamaica",
    "startDate": "2023-02-24T09:49:22.592Z",
    "endDate": "2023-03-24T08:34:53.964Z",
    "description": "id est consectetur consectetur duis nulla nostrud ullamco ut consectetur et duis fugiat culpa officia labore aliquip ullamco magna exercitation voluptate magna amet occaecat ad labore aliquip anim velit laborum aliqua ad dolore sit eu ullamco Lorem eiusmod laboris excepteur anim id aliqua ad elit nostrud ullamco ullamco do velit",
    "budget": 3,
    "photo": "https://i.picsum.photos/id/617/400/400.jpg?hmac=MqRNOlg5VSJf2yq6kIPkUOyevjacjZpDJZX4xoJY3IE",
    "activities": [
      "Anim do enim Lorem incididunt officia voluptate ipsum et reprehenderit mollit aliqua cillum esse dolor.",
      "Dolore dolore excepteur aliquip deserunt ipsum commodo ullamco eiusmod.",
      "Pariatur eiusmod quis duis irure magna reprehenderit ullamco sint voluptate.",
      "Ea et eu eiusmod commodo voluptate nisi ipsum deserunt amet voluptate ex consectetur.",
      "Sint amet sunt elit id ea deserunt esse sit."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "1",
      "3",
      "5"
    ],
    "messages": []
  },
  {
    "ownerId": "7",
    "tripTitle": "Esse amet aute sit reprehenderit eiusmod eiusmod commodo minim anim.",
    "destination": "Ribera, Lithuania",
    "startDate": "2023-02-13T12:44:27.998Z",
    "endDate": "2023-02-24T18:37:16.290Z",
    "description": "est aute minim ea id occaecat adipisicing quis id minim consequat quis in exercitation aliquip ut pariatur sit laborum sit laboris ad enim non sint deserunt dolor duis ipsum eiusmod magna enim officia excepteur amet ullamco consectetur sint tempor officia anim reprehenderit magna exercitation consequat id non enim",
    "budget": 2,
    "photo": "https://i.picsum.photos/id/1012/400/400.jpg?hmac=YgCUU9RsJ8Awo1vmTcwLJuquvTYw8URC13GpKcrxP44",
    "activities": [
      "Ea dolor aliquip irure laborum.",
      "Ullamco non labore esse do magna in reprehenderit cupidatat mollit dolore incididunt est veniam.",
      "Sunt et occaecat proident adipisicing.",
      "Lorem in do eu occaecat quis commodo reprehenderit duis nostrud esse nulla duis excepteur elit.",
      "Do cillum sint adipisicing velit.",
      "Incididunt culpa laborum esse mollit duis velit ea culpa magna."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "2"
    ],
    "messages": []
  },
  {
    "ownerId": "4",
    "tripTitle": "In labore ex quis laboris amet id exercitation elit proident nostrud officia sit.",
    "destination": "Frank, Barbados",
    "startDate": "2023-02-18T10:07:30.361Z",
    "endDate": "2023-03-29T17:25:31.079Z",
    "description": "tempor elit ullamco nulla non duis deserunt qui aute et non amet Lorem officia ex officia excepteur aliquip pariatur laboris laboris Lorem sint nostrud veniam ea fugiat fugiat incididunt duis qui ullamco aliqua amet est aute laborum ea id duis minim est aliquip culpa est nulla velit aliquip voluptate occaecat labore aliquip eu ad sit do",
    "budget": 3,
    "photo": "https://i.picsum.photos/id/767/400/400.jpg?hmac=ZNR19AQix9gwPULnBTBzDDvNnSdmZCJ50HA292H6ciE",
    "activities": [
      "Ipsum commodo ex id nostrud mollit anim anim proident ipsum.",
      "Voluptate ea ullamco non magna in dolore do esse cillum.",
      "Dolore labore magna do irure ut consequat sunt nostrud adipisicing deserunt consectetur.",
      "Duis nostrud ea cupidatat non aliquip sint esse.",
      "Aliqua duis excepteur sit cillum sint quis.",
      "Consequat eu velit officia est commodo culpa proident est enim.",
      "Nostrud fugiat ad cupidatat nostrud qui sit officia.",
      "Veniam ex duis eu officia deserunt magna enim nisi et laboris."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "7",
      "7"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Consectetur consequat adipisicing duis non ad fugiat qui sunt cillum.",
    "destination": "Conway, Austria",
    "startDate": "2023-02-28T12:29:36.562Z",
    "endDate": "2023-02-05T16:35:06.016Z",
    "description": "aliquip cupidatat mollit aliquip cillum ut laboris eiusmod est sunt tempor anim eu laboris eu enim proident voluptate nisi non deserunt deserunt ullamco veniam nisi quis excepteur deserunt est laboris ex esse sint mollit in cillum mollit elit nisi ut aliquip proident velit nostrud reprehenderit enim in amet mollit velit aliqua cupidatat nostrud ipsum dolor veniam est",
    "budget": 3,
    "photo": "https://i.picsum.photos/id/903/400/400.jpg?hmac=CNQvwqpU8SdpO4DIOgYC3aCuTXd6SYx5tiC-EUKBTRk",
    "activities": [
      "Non excepteur eu culpa minim non.",
      "Esse in ullamco mollit mollit laboris voluptate eiusmod qui ad et cillum adipisicing reprehenderit nisi.",
      "Quis anim veniam proident ad velit mollit.",
      "Nisi labore ad aliquip irure.",
      "Lorem laboris dolore duis consectetur quis nostrud eiusmod proident ullamco aliqua cillum irure ad reprehenderit.",
      "Dolore mollit quis ex aliquip cillum reprehenderit deserunt sint Lorem ullamco."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "4",
      "4",
      "8"
    ],
    "messages": []
  },
  {
    "ownerId": "5",
    "tripTitle": "Occaecat labore ad consectetur quis amet labore aliquip laborum ad elit officia.",
    "destination": "Osmond, Montserrat",
    "startDate": "2023-03-01T19:10:13.553Z",
    "endDate": "2023-02-23T19:53:08.146Z",
    "description": "culpa fugiat dolore cupidatat consequat nostrud labore dolore reprehenderit adipisicing sunt enim ut cillum ullamco laboris sit enim sint officia eiusmod aute minim tempor deserunt et do aliquip consectetur esse ex excepteur fugiat ex incididunt adipisicing Lorem elit consectetur occaecat qui pariatur mollit veniam excepteur nulla voluptate consequat eiusmod irure aute",
    "budget": 3,
    "photo": "https://i.picsum.photos/id/193/400/400.jpg?hmac=O5w9OO_AF34Tn7ki7fn9K4sauEaUtlqIe9kORw0NdvY",
    "activities": [
      "Ea ad do eu enim anim.",
      "Irure nisi id et mollit eiusmod dolor eu Lorem anim ipsum dolor ipsum esse incididunt.",
      "Ea commodo nulla culpa dolore esse enim officia.",
      "Do labore pariatur minim sit.",
      "Culpa consequat deserunt fugiat ea do consequat dolor laborum ea.",
      "Aliquip laboris cupidatat nostrud sit cupidatat culpa.",
      "Consectetur enim pariatur ex pariatur sunt veniam id elit ut ex velit ea.",
      "Incididunt voluptate culpa adipisicing dolore irure ut."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "1",
      "4"
    ],
    "messages": []
  },
  {
    "ownerId": "1",
    "tripTitle": "Ut culpa duis minim incididunt non ut elit culpa.",
    "destination": "Rockhill, France, Metropolitan",
    "startDate": "2023-02-21T09:37:45.651Z",
    "endDate": "2023-02-05T02:25:08.689Z",
    "description": "officia enim ipsum sit officia qui Lorem laboris ut adipisicing sunt proident elit sit eiusmod ipsum officia cillum reprehenderit fugiat amet exercitation tempor amet nostrud occaecat ex deserunt sint sint est",
    "budget": 4,
    "photo": "https://i.picsum.photos/id/691/400/400.jpg?hmac=14D074A7Xc18FnjaWbMTHKfr4WZFvBF8ZU1NHoS3TB8",
    "activities": [
      "Anim adipisicing officia dolore eiusmod et magna consectetur enim nostrud excepteur."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "8",
      "7",
      "3"
    ],
    "messages": []
  },
  {
    "ownerId": "6",
    "tripTitle": "Id ullamco amet Lorem incididunt et commodo laboris aliqua et adipisicing labore ullamco reprehenderit.",
    "destination": "Edneyville, Syria",
    "startDate": "2023-02-28T13:49:19.120Z",
    "endDate": "2023-02-01T04:14:22.131Z",
    "description": "magna adipisicing veniam quis proident officia aliqua est incididunt duis qui cupidatat consequat adipisicing nostrud consectetur aute in excepteur occaecat irure amet duis tempor magna do eu ad veniam non reprehenderit amet",
    "budget": 2,
    "photo": "https://i.picsum.photos/id/693/400/400.jpg?hmac=r_AZi7l9HQ3XiRsFW_ycVgpzKRzIYvZBTJXre2J_b_8",
    "activities": [
      "Adipisicing in nisi incididunt exercitation anim.",
      "Fugiat aliqua amet non elit sit officia laborum sint.",
      "Et ad mollit consectetur laborum.",
      "Est incididunt et laborum ullamco anim pariatur.",
      "Laborum sunt sint Lorem deserunt enim laborum enim adipisicing nulla eiusmod elit.",
      "Et sit ullamco culpa officia laboris labore magna tempor anim sint nostrud ipsum duis labore.",
      "Nostrud in pariatur reprehenderit ullamco fugiat do commodo id."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "2"
    ],
    "messages": []
  },
  {
    "ownerId": "7",
    "tripTitle": "Cillum laboris do anim eu proident do veniam excepteur exercitation ullamco esse adipisicing ex.",
    "destination": "Ola, Belarus",
    "startDate": "2023-02-16T20:07:43.456Z",
    "endDate": "2023-03-10T06:49:12.797Z",
    "description": "Lorem aute voluptate labore ullamco non nostrud ipsum dolore dolor quis incididunt id veniam ut aliqua sit amet enim nulla fugiat laboris nostrud et aliquip et nisi sit incididunt incididunt do nostrud non nisi ea amet laboris mollit cupidatat laborum elit tempor",
    "budget": 1,
    "photo": "https://i.picsum.photos/id/1054/400/400.jpg?hmac=tQB1YYxYgDdAseNnQ3Ewo_ZS1eVz2ONyLmZ_-2Uyy_E",
    "activities": [
      "Esse tempor laboris labore fugiat sit reprehenderit cillum esse sint duis aliqua laborum.",
      "Laboris labore exercitation commodo sint incididunt velit exercitation anim proident non laboris ut qui fugiat.",
      "Quis eu consectetur ipsum quis nostrud aliquip magna.",
      "Incididunt laborum ipsum tempor cupidatat amet fugiat minim tempor.",
      "Nostrud amet irure mollit velit duis cupidatat non exercitation adipisicing voluptate excepteur velit do."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "6",
      "5",
      "3",
      "5",
      "3"
    ],
    "messages": []
  },
  {
    "ownerId": "4",
    "tripTitle": "Dolore incididunt dolore Lorem exercitation cillum.",
    "destination": "Lindisfarne, Hungary",
    "startDate": "2023-02-07T19:52:32.420Z",
    "endDate": "2023-02-02T23:38:02.400Z",
    "description": "adipisicing mollit minim aliquip consequat laborum ex eiusmod sunt ad in consequat ut in excepteur eu reprehenderit labore magna nisi ex in amet ea sit quis qui amet aliqua incididunt veniam elit non irure quis labore do nostrud sint",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/586/400/400.jpg?hmac=cwCJngku1FJAlm3jB_5APROv6ftBlPlCZnrdXU-iAac",
    "activities": [
      "Veniam labore non excepteur aliqua reprehenderit nostrud sit laboris ullamco deserunt laboris.",
      "Esse ut velit consectetur ut id duis.",
      "Anim non nulla occaecat laborum."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "3",
      "4",
      "1",
      "3",
      "6"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Nisi deserunt id consectetur consectetur irure velit tempor ipsum non mollit incididunt commodo.",
    "destination": "Hebron, Tajikistan",
    "startDate": "2023-01-30T05:51:28.204Z",
    "endDate": "2023-02-17T15:05:13.376Z",
    "description": "occaecat fugiat ex cupidatat occaecat adipisicing fugiat nostrud sit minim ea labore fugiat velit esse elit esse adipisicing sit excepteur",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/40/400/400.jpg?hmac=7zIvEV8mCg0y9PcHWWU5YImVl0ua16F8YabMHPxBjk0",
    "activities": [
      "Consequat occaecat quis commodo elit dolore cupidatat magna eiusmod dolor minim non dolor duis est.",
      "In fugiat quis nisi esse commodo excepteur.",
      "Ullamco sunt laborum magna id.",
      "Duis aliqua irure adipisicing officia irure qui eiusmod officia.",
      "Pariatur nisi ex eu sint.",
      "Dolor aliqua quis est elit eu reprehenderit enim anim veniam eiusmod tempor qui et laboris."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "2"
    ],
    "messages": []
  },
  {
    "ownerId": "3",
    "tripTitle": "Cupidatat consequat id sunt dolore cillum est esse deserunt ullamco.",
    "destination": "Homestead, Anguilla",
    "startDate": "2023-01-19T06:54:56.694Z",
    "endDate": "2023-01-31T03:27:47.700Z",
    "description": "consectetur aliqua eu commodo proident elit deserunt occaecat eu commodo aute ea nulla excepteur aliquip pariatur voluptate reprehenderit minim commodo proident cupidatat reprehenderit ea irure anim culpa adipisicing consequat laboris enim elit irure amet culpa excepteur officia magna in nisi occaecat veniam exercitation sit nisi in duis aliqua duis reprehenderit sunt est excepteur exercitation minim amet",
    "budget": 1,
    "photo": "https://i.picsum.photos/id/980/400/400.jpg?hmac=lFDlxYEK20rtfSIrXcYTy4PwI0u3kSle5dUHX90OYKo",
    "activities": [
      "Nulla duis quis amet cupidatat incididunt nulla culpa consectetur nisi.",
      "Cillum est aliquip duis quis ex sit ullamco deserunt occaecat laboris.",
      "Lorem occaecat cupidatat culpa magna ullamco non sunt ut id quis tempor.",
      "Do et aute nostrud non magna occaecat amet.",
      "Amet incididunt esse proident incididunt Lorem voluptate incididunt quis consequat tempor.",
      "Fugiat officia minim minim dolor.",
      "Culpa do anim exercitation velit.",
      "Fugiat laborum est labore voluptate velit nisi minim duis."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "7"
    ],
    "messages": []
  },
  {
    "ownerId": "6",
    "tripTitle": "Aute cillum eiusmod do excepteur anim dolor.",
    "destination": "Suitland, Guadeloupe",
    "startDate": "2023-02-15T19:13:11.768Z",
    "endDate": "2023-03-05T18:38:59.865Z",
    "description": "et ut voluptate sint dolor nostrud esse esse reprehenderit consectetur dolor Lorem occaecat eu aute velit elit in ut tempor aliqua cillum aliquip eiusmod aliquip est reprehenderit pariatur officia aliquip labore et amet ea laboris consequat duis voluptate in minim culpa est ex excepteur tempor qui",
    "budget": 4,
    "photo": "https://i.picsum.photos/id/252/400/400.jpg?hmac=Yb9PXSORLCfsp2vjOZMmhtPkouynLNxeD5NnUru0bCI",
    "activities": [
      "Laboris excepteur eiusmod voluptate adipisicing est labore consectetur quis adipisicing laboris."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "7",
      "4",
      "4",
      "6",
      "3"
    ],
    "messages": []
  },
  {
    "ownerId": "7",
    "tripTitle": "Laborum irure laborum nostrud eiusmod aliqua.",
    "destination": "Cavalero, Burkina Faso",
    "startDate": "2023-02-01T11:21:24.901Z",
    "endDate": "2023-03-08T13:56:41.331Z",
    "description": "fugiat dolore proident cillum nisi aute eu est non id cupidatat nulla dolore magna laborum exercitation labore non elit ex consectetur proident deserunt anim ullamco consectetur non officia ullamco non ad consequat non culpa aute ipsum",
    "budget": 3,
    "photo": "https://i.picsum.photos/id/858/400/400.jpg?hmac=Nb5PcrwaPuqbi7vAXj1JYKqBAWpPbTwK_RxAWv6wTFo",
    "activities": [
      "Et sint anim reprehenderit occaecat proident.",
      "Officia cupidatat nostrud dolor sint do adipisicing et nulla."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "6",
      "6"
    ],
    "messages": []
  },
  {
    "ownerId": "1",
    "tripTitle": "Excepteur eu aliquip ut do laborum qui ullamco excepteur nulla.",
    "destination": "Clayville, India",
    "startDate": "2023-02-27T08:58:43.045Z",
    "endDate": "2023-02-23T17:18:00.743Z",
    "description": "mollit laborum ea commodo ipsum quis dolore labore laborum cupidatat ea eu ipsum ullamco sint voluptate qui sint occaecat nisi anim laborum id amet est magna quis in proident est id consequat culpa proident sit enim quis non incididunt velit ipsum quis velit dolor anim incididunt ea voluptate in nisi nisi labore laborum laborum anim culpa veniam ipsum",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/324/400/400.jpg?hmac=FNvSnDH2LM9s_74wXGut5LXk2W3XavYhnxsSWmrJlqg",
    "activities": [
      "Adipisicing tempor aute cupidatat ex velit officia tempor do ut."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "7",
      "4"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Sit velit reprehenderit incididunt pariatur eiusmod est velit.",
    "destination": "Coral, Singapore",
    "startDate": "2023-03-01T22:49:27.641Z",
    "endDate": "2023-02-15T16:07:52.124Z",
    "description": "fugiat deserunt nostrud sunt sint velit qui reprehenderit do amet officia consequat incididunt do irure deserunt aute adipisicing exercitation Lorem proident elit consectetur nisi deserunt ex ex in magna reprehenderit eu pariatur et Lorem aute",
    "budget": 4,
    "photo": "https://i.picsum.photos/id/478/400/400.jpg?hmac=913YXqx2-jF8opld3-WHcGq1djFXQk5WMSOlJR4jXo0",
    "activities": [
      "Proident amet consectetur tempor amet officia amet elit sit.",
      "Ipsum ullamco deserunt anim laboris pariatur in proident sit esse sint velit.",
      "Culpa nostrud id consequat ex eu exercitation enim eiusmod ea consectetur duis nulla.",
      "Fugiat aliquip laborum dolore aliquip dolor et cillum cillum ipsum.",
      "Occaecat duis culpa laboris exercitation exercitation cillum dolor reprehenderit sit elit nulla.",
      "Laborum eu cupidatat duis minim aute labore elit consequat consequat duis veniam."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "8"
    ],
    "messages": []
  },
  {
    "ownerId": "4",
    "tripTitle": "Nulla elit qui veniam cillum.",
    "destination": "Glenville, British Indian Ocean Territory",
    "startDate": "2023-02-04T15:03:29.737Z",
    "endDate": "2023-02-13T20:40:24.634Z",
    "description": "ipsum deserunt eu cillum excepteur sunt fugiat non quis anim ad aliqua quis deserunt nostrud est eiusmod reprehenderit fugiat eiusmod ullamco anim labore do cillum ut tempor qui do occaecat consectetur deserunt elit consequat mollit sunt et ea reprehenderit adipisicing deserunt velit laborum laborum minim nostrud est magna commodo Lorem amet mollit eiusmod deserunt Lorem sint amet",
    "budget": 1,
    "photo": "https://i.picsum.photos/id/360/400/400.jpg?hmac=sDYkXXrqwXxTJvE4PRW4b1Fa5Zb_iN8W-_rnmT6BNiQ",
    "activities": [
      "Irure eiusmod occaecat amet enim excepteur ex aute velit officia incididunt est fugiat enim duis.",
      "Est irure sunt deserunt sint incididunt enim.",
      "Exercitation laboris eu ex reprehenderit do dolore sunt in."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "1",
      "7",
      "8"
    ],
    "messages": []
  },
  {
    "ownerId": "3",
    "tripTitle": "Eu incididunt aliqua cupidatat qui aliqua amet veniam sunt consectetur tempor cupidatat et aute officia.",
    "destination": "Flintville, New Caledonia",
    "startDate": "2023-01-28T05:56:42.917Z",
    "endDate": "2023-03-25T10:32:58.034Z",
    "description": "anim labore mollit et consequat aute sunt aliqua est nisi aliqua in mollit commodo proident duis culpa esse sunt ea reprehenderit laborum nisi anim nostrud quis",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/950/400/400.jpg?hmac=BY1OAw29pHWLsIz39vMvLpa2cVbYi3S3aIdLYOPZHDo",
    "activities": [
      "Aliqua aute voluptate cillum irure id elit laboris.",
      "Consectetur adipisicing id nostrud quis voluptate excepteur et ex laboris excepteur nisi.",
      "Ad velit ex in eu proident veniam irure tempor nostrud nisi."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "7",
      "3",
      "8",
      "4"
    ],
    "messages": []
  },
  {
    "ownerId": "5",
    "tripTitle": "Minim dolore elit aliqua sit dolore in do fugiat.",
    "destination": "Orovada, Namibia",
    "startDate": "2023-02-06T19:35:49.363Z",
    "endDate": "2023-03-01T05:08:52.954Z",
    "description": "nulla non enim nisi sint ex id veniam aute fugiat esse eiusmod nostrud amet irure non exercitation ut proident consequat mollit sit ut qui nulla et aute",
    "budget": 2,
    "photo": "https://i.picsum.photos/id/1044/400/400.jpg?hmac=XhejMw5uxJMo4BMD70uQmZ4fD2IA2xYViukBLyNPO1U",
    "activities": [
      "Eiusmod laboris excepteur eu veniam sit laboris."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "2",
      "1",
      "5"
    ],
    "messages": []
  },
  {
    "ownerId": "8",
    "tripTitle": "Ipsum sunt reprehenderit fugiat fugiat voluptate laboris fugiat.",
    "destination": "Beechmont, Denmark",
    "startDate": "2023-01-29T11:11:59.591Z",
    "endDate": "2023-03-31T03:08:00.252Z",
    "description": "irure fugiat cillum ipsum enim minim amet proident culpa eu anim sunt anim ipsum laboris laborum eiusmod ullamco ex reprehenderit fugiat ex enim duis officia nisi culpa dolore quis eu occaecat eiusmod aute cillum excepteur in fugiat elit deserunt eu duis enim",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/408/400/400.jpg?hmac=H6nrCIt7s8kTZ12hSqoeSPxOCCmDytuE6e0AYiToOZQ",
    "activities": [
      "Ad et veniam eu anim ex duis excepteur sunt consectetur laboris ea.",
      "Velit consectetur excepteur velit ut commodo.",
      "Labore aliquip culpa ea culpa.",
      "Nulla amet irure laborum est dolore esse deserunt officia sunt esse irure elit.",
      "Laborum est exercitation ea sunt occaecat mollit aute ut."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "pending"
      }
    ],
    "users": [
      "8",
      "6",
      "5",
      "2",
      "4"
    ],
    "messages": []
  },
  {
    "ownerId": "6",
    "tripTitle": "Sunt occaecat minim sint eiusmod qui elit minim dolor reprehenderit culpa proident do ex irure.",
    "destination": "Century, Senegal",
    "startDate": "2023-02-18T03:19:59.656Z",
    "endDate": "2023-02-01T03:26:09.744Z",
    "description": "cupidatat consequat ullamco ipsum anim id id non commodo veniam duis nulla officia cupidatat enim sint eiusmod culpa ex dolore labore proident eu sit cillum Lorem eiusmod",
    "budget": 1,
    "photo": "https://i.picsum.photos/id/354/400/400.jpg?hmac=LJsL-rvCrNGhJ4QcBp0NMe8lSMescg2avo0A5qQwdnk",
    "activities": [
      "Dolor et occaecat ut nostrud anim pariatur consectetur mollit amet sit eiusmod magna."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "4",
      "2",
      "7",
      "5"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Cillum eiusmod exercitation fugiat aliquip non aliquip nulla esse sint commodo aliqua non cillum cillum.",
    "destination": "Brethren, Afghanistan",
    "startDate": "2023-01-28T22:00:05.896Z",
    "endDate": "2023-02-21T03:34:16.784Z",
    "description": "occaecat et id voluptate nostrud in anim aute anim reprehenderit dolor laboris dolore anim Lorem proident eiusmod eu qui qui proident qui irure eiusmod Lorem anim nulla magna tempor excepteur ipsum proident ullamco excepteur dolor aliqua commodo culpa sint esse",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/1020/400/400.jpg?hmac=j2LfdMwlbYgAWkfKIpBGnLc7h0yA01uEb4SR_4jYlK8",
    "activities": [
      "Velit ipsum Lorem est non qui cupidatat deserunt magna occaecat sit id mollit.",
      "Sint nulla non eiusmod veniam pariatur veniam nostrud anim ut veniam cillum do sunt duis.",
      "Lorem enim deserunt occaecat qui ullamco culpa proident esse dolor et et consectetur magna est.",
      "In elit non pariatur commodo sint tempor cillum sunt cillum labore mollit.",
      "Excepteur dolore commodo cillum exercitation ad qui sint ut non.",
      "Ipsum in nulla dolore nostrud elit minim proident.",
      "Quis tempor eiusmod ullamco aliqua labore laborum excepteur proident ut ut eu nostrud."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "1",
      "6"
    ],
    "messages": []
  },
  {
    "ownerId": "2",
    "tripTitle": "Sint cillum nisi aute pariatur non Lorem adipisicing deserunt officia voluptate.",
    "destination": "Choctaw, Brunei Darussalam",
    "startDate": "2023-02-07T04:41:01.463Z",
    "endDate": "2023-02-12T10:02:51.771Z",
    "description": "irure velit commodo officia enim in enim amet dolore occaecat est dolor exercitation deserunt quis sint ad aliqua ad irure laboris in",
    "budget": 5,
    "photo": "https://i.picsum.photos/id/383/400/400.jpg?hmac=o8OhkS2vOsB1NkM3zgUteQdkvv5cVTYT-WDJLYwHWJY",
    "activities": [
      "Duis culpa nulla exercitation laboris.",
      "Magna adipisicing incididunt consectetur sint anim excepteur consequat labore velit occaecat ipsum dolore esse.",
      "Ut cillum dolor cupidatat ex laboris dolore incididunt laborum enim officia incididunt commodo.",
      "Eu excepteur fugiat eiusmod Lorem amet veniam adipisicing nisi do esse.",
      "Dolor consectetur est adipisicing ipsum consequat nisi aliqua fugiat cillum elit commodo nisi.",
      "Aliquip amet anim consectetur occaecat dolore ut fugiat nostrud labore ipsum do incididunt occaecat."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "accepted"
      }
    ],
    "users": [
      "8",
      "5",
      "8"
    ],
    "messages": []
  },
  {
    "ownerId": "7",
    "tripTitle": "Mollit tempor ullamco minim sit sit pariatur mollit ullamco commodo do tempor.",
    "destination": "Dodge, Solomon Islands",
    "startDate": "2023-01-30T16:29:26.837Z",
    "endDate": "2023-03-31T08:18:26.235Z",
    "description": "dolore anim occaecat laborum voluptate minim magna in cupidatat do laborum minim duis ut voluptate officia elit fugiat sit id aliqua consectetur dolor quis sint qui consequat id aliquip cupidatat veniam incididunt aliquip anim id",
    "budget": 2,
    "photo": "https://i.picsum.photos/id/877/400/400.jpg?hmac=1GLIHZpu-hjwP6VAuefuYNeMNNCuV9iBmsAMIu9XEE4",
    "activities": [
      "Minim ea sit pariatur enim commodo consectetur incididunt aute Lorem ex.",
      "Cupidatat incididunt ex veniam aliqua voluptate proident et ex cupidatat aliqua nulla et.",
      "Ad quis voluptate eu magna velit elit do deserunt in cupidatat elit.",
      "Consectetur anim ut nostrud culpa culpa cillum enim magna quis aute.",
      "Id nostrud anim cillum qui proident ipsum dolor.",
      "Irure eiusmod consequat dolor est irure fugiat officia do.",
      "Quis incididunt enim occaecat pariatur laborum laboris.",
      "Eu velit non eiusmod officia deserunt."
    ],
    "requests": [
      {
        "userId": "5",
        "status": "denied"
      }
    ],
    "users": [
      "2",
      "6",
      "5",
      "7"
    ],
    "messages": []
  }
]

Message.insertMany(messageData).then((response) => {
  console.log('Inserted messages');
});

Profile.insertMany(profileData).then((response) => {
  console.log('Inserted profiles');
});

Trip.insertMany(tripData).then((response) => {
  console.log('Inserted trips');
});

Notification.insertMany(notificationData).then((response) => {
  console.log('Inserted notifications');
});
