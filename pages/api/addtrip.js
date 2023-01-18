import schemas from '../../utils/db';
export default function handler(req, res) {
  const catcher = (error) => res.status(400).json({ error });
  let userid = req.headers.userid;
  let data = {
    ownerId: userid,
    ...req.body,
  };
  console.log(data);
  if (req.method === 'POST') {
    // Process a POST request
    schemas.Trip.create(data)
      .then((result) => {
        schemas.Profile.findOneAndUpdate(
          { userId: userid },
          { $push: { trips: result } }
        );
      })
      .then(() => {
        res.status(201).json('Trip created!');
      })
      .catch(catcher);
  } else {
    res.status(400).json({ error: 'No Response for This Request' });
  }
}
