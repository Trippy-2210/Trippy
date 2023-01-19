import schemas from '../../../utils/db';
export default function handler(req, res) {
  const catcher = (error) => res.status(400).json({ error });
  let userid = req.headers.userid;
  let endpoint = '/trips/';
  let data = {
    ownerId: userid,
    ...req.body,
  };
  if (req.method === 'POST') {
    schemas.Trip.create(data)
      .then((result) => {
        endpoint += result._id.toString();
        return schemas.Profile.findOneAndUpdate(
          { userId: userid },
          { $push: { trips: result } }
        );
      })
      .then(() => {
        console.log(endpoint);
        res.status(201).json(endpoint);
      })
      .catch(catcher);
  } else {
    res.status(400).json({ error: 'No Response for This Request' });
  }
}
