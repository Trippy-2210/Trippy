import { connectDB, Profile } from '../../../utils/exampleData'

connectDB();

export default async function handler(req, res) {
  Profile.find({})
  .then((profiles) => {
    res.json(profiles);
  })
}