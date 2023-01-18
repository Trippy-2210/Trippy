import schemas from '../../utils/db';
export default function handler(req, res) {
  const catcher = (error) => res.status(400).json({ error });
  let data = {
    ownerId: req.headers.userid,
    ...req.body,
  };
  console.log(data);
  if (req.method === 'POST') {
    // Process a POST request
    schemas.Trip.create(data)
      .then((result) => {
        console.log(result._id.toString());
        console.log('success!');
        return result._id.toString();
      })
      .then((tripId) => {
        schemas.Profile.findOneAndUpdate({});
      })
      .catch(catcher);
  } else {
    res.status(400).json({ error: 'No Response for This Request' });
  }
}
