import styles from './addtrip.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';

import dayjs from 'dayjs';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Header from '../../../components/header/Header';
import PlaceAutocomplete from '../../../components/trips/PlaceAutocomplete';
import TextInput from '../../../components/trips/TextInput';
import TextArea from '../../../components/trips/TextArea';
import DatePicker from '../../../components/trips/DatePicker';
import CloudinaryUpload from '../../../components/trips/CloudinaryUpload';
import ActivityList from '../../../components/trips/ActivityList';
import SelectBudget from '../../../components/trips/SelectBudget';
import ErrorSnackbar from '../../../components/trips/ErrorSnackbar';

import submitTripVerify from '../../../utils/trip/submitTripVerify';

export default function Addtrip() {
  const [tripName, setTripName] = useState('');
  const [location, setLocation] = useState(null);
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const [tripDescription, setTripDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [activities, setActivities] = useState([]);
  const [budget, setBudget] = useState(null);
  const [open, setOpen] = useState(false);
  const [alertString, setAlertString] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      tripTitle: tripName,
      destination: (location && location.description) || '',
      startDate,
      endDate,
      description: tripDescription,
      budget,
      photo: photoUrl,
      activities,
    };
    //validateInputs()
    let newAlertString = submitTripVerify(data);
    if (newAlertString) {
      setAlertString(newAlertString);
      setOpen(true);
    } else {
      axios
        .post('/api/trips/addtrip', data)
        .then((response) => {
          console.log(response);
          router.push(response.data);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <Head>
        <title>Trippy | add your trip</title>
        <meta
          name='description'
          content='Add a trip for others to connect with'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Container m={2} p={2}>
        <div className={styles.wholePage}>
          <div className={styles.formItems}>
            <div className={styles.leftSide}>
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
              <div className={styles.budgetContainer}>
                <SelectBudget value={budget} setValue={setBudget} />
              </div>
              <div className={styles.description_input}>
                <TextArea
                  id='description-input'
                  label='Trip Description'
                  value={tripDescription}
                  setValue={setTripDescription}
                  placeholder='Tell us about your trip!'
                />
              </div>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.upload_image_button}>
                <CloudinaryUpload
                  url={photoUrl}
                  setUrl={setPhotoUrl}
                  label='Add Trip Picture'
                />
              </div>
              <div className={styles.activity_list}>
                <ActivityList
                  activities={activities}
                  setActivities={setActivities}
                />
              </div>
            </div>
          </div>
          <div>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleSubmit}
              sx={{ width: 300 }}
            >
              Add Trip
            </Button>
          </div>
        </div>
      </Container>
      <ErrorSnackbar open={open} setOpen={setOpen} message={alertString} />
    </>
  );
}
