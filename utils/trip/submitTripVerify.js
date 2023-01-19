export default function submitTripVerify(data) {
  let alert = '';
  if (!data.tripTitle.trim()) {
    alert += 'Please add a trip name!\n';
  } else if (!data.destination.trim()) {
    alert += 'Please add a destination!\n';
  } else if (data.startDate >= data.endDate) {
    alert += 'Please make sure your end date is after your start date!\n';
  } else if (!data.budget) {
    alert += 'Please add a budget!\n';
  } else if (!data.description.trim()) {
    alert += 'Please add a trip description!\n';
  } else if (!data.photo) {
    alert += 'Please add a trip profile photo!\n';
  } else if (data.activities.length < 1) {
    alert += 'Please add activities!\n';
  }
  return alert;
}

/*
let data = {
      tripTitle: tripName,
      destination: location.description,
      startDate,
      endDate,
      description: tripDescription,
      budget,
      photo: photoUrl,
      activities,
      budget,
    }
 */
