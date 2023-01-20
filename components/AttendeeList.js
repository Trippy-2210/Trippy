import {useState, useEffect} from 'react';
import axios from 'axios';

const AttendeeList = function({trip}) {
  const [attendeeData, setAttendees] = useState([]);

  console.log(trip, attendeeData);

  var renderAttendees = function() {
    var attendees = [];

    attendeeData.map(function(entry, i) {
      attendees.push(
        <div key={'attendee' + i} className='attendee'>
          {entry.firstName + ' ' + entry.lastName}
        </div>
      )
    })

    return attendees;
  };

  var getAttendees = function() {
    if (!trip) {return;}

    axios.get('/api/attendees/' + trip._id)
      .then(function(response) {
        setAttendees(response.data);
      })

  };

  useEffect(getAttendees, [trip]);

  return (
    <div className='attendeeList v'>
      {renderAttendees()}
    </div>
  );
};

export default AttendeeList;
