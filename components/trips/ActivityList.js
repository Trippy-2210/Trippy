import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './addForm.module.css';

export default function ActivityList({ activities, setActivities }) {
  const [activityInput, setActivityInput] = useState('');

  function handleAddActivity(e) {
    if (activityInput) {
      e.preventDefault();
      if (!activities.includes(activityInput)) {
        setActivities([activityInput, ...activities]);
        setActivityInput('');
      }
    }
  }
  function handleAddActivityEnter(e) {
    if (e.keyCode == 13 && activityInput) {
      if (!activities.includes(activityInput)) {
        setActivities([activityInput, ...activities]);
        setActivityInput('');
      }
    }
  }
  return (
    <>
      <div className={styles.fieldAndbutton}>
        <div className={styles.activity_text_field}>
          <TextField
            variant='outlined'
            label='Activities'
            value={activityInput}
            onChange={(e) => setActivityInput(e.target.value)}
            onKeyDown={handleAddActivityEnter}
          />
        </div>
        <div className={styles.add_button}>
          <Button variant='contained' size='sm' onClick={handleAddActivity}>
            Add
          </Button>
        </div>
      </div>
      <div>
        <List>
          {activities.length > 0 &&
            activities.map((activity, index) => (
              <ListItem
                key={activity}
                divider={true}
                sx={{
                  borderRadius: 2,
                }}
                secondaryAction={
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={(e) => {
                      e.preventDefault();
                      const newList = activities.slice();
                      newList.splice(index, 1);
                      setActivities(newList);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={activity} />
              </ListItem>
            ))}
        </List>
      </div>
    </>
  );
}
