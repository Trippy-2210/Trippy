import styles from './addtrip.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';

import PlaceAutocomplete from '../../../components/trips/PlaceAutocomplete';
import TextInput from '../../../components/trips/TextInput';
import TextArea from '../../../components/trips/TextArea';
import DatePicker from '../../../components/trips/DatePicker';
import CloudinaryUpload from '../../../components/trips/CloudinaryUpload';
import ActivityList from '../../../components/trips/ActivityList';

export default function Addtrip() {
  const router = useRouter();
  const { uid } = router.query;
  const [tripName, setTripName] = useState('');
  const [location, setLocation] = useState(null);
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const [tripDescription, setTripDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  return (
    <>
      <Script src='https://upload-widget.cloudinary.com/global/all.js' />
      <div>
        <Box component='form' m={2} p={2}>
          <div className={styles.tripname_input}>
            <TextInput
              label='Trip Name'
              value={tripName}
              setValue={setTripName}
            />
          </div>
          <div className={styles.tripform_autocomplete}>
            <PlaceAutocomplete
              label='Where to?'
              value={location}
              setValue={setLocation}
            />
          </div>
          <div className={styles.choosedates}>
            <DatePicker
              label='Start Date'
              value={startDate}
              setValue={setStartDate}
            />
            <div className={styles.datesTO}>to</div>
            <DatePicker
              label='End Date'
              value={endDate}
              setValue={setEndDate}
            />
          </div>
          <div className={styles.description_input}>
            <TextArea
              label='Trip Description'
              value={tripDescription}
              setValue={setTripDescription}
              placeholder='Tell us about your trip!'
            />
          </div>
          <div className={styles.upload_image_button}>
            <CloudinaryUpload
              url={photoUrl}
              setUrl={setPhotoUrl}
              label='Add Trip Picture'
            />
          </div>
          <div className={styles.activity_list}>
            <ActivityList />
          </div>

          {uid}
        </Box>
      </div>
    </>
  );
}

// const values = {
//   description: "Santa Fe, NM, USA",
//   matched_substrings: "[{…}]",
//   place_id: "ChIJqVKY50NQGIcRQN-I_XMjkIw",
//   reference: "ChIJqVKY50NQGIcRQN-I_XMjkIw",
//   structured_formatting:
//     '{main_text: "Santa Fe", main_text_matched_substring…}',
//   terms: "[{…}, {…}, {…}]",
//   types: '["locality", "political", "geocode"]',
// };
