import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Option 1', 'Option 2'];

const Search = ({cityFilter, onSubmitHandler}) => {
  return (
    <form className='search' onSubmit={onSubmitHandler}>
      <label>

        <input type='text'></input>
        {/* <Autocomplete
          sx={{
            display: 'inline-block',
            '& input': {
              width: 200,
              bgcolor: 'background.paper',
              color: (theme) =>
                theme.palette.getContrastText(theme.palette.background.paper),
                borderRadius: '40px',
                height: '40px',
                border: 'hidden',
                boxShadow: '0px 0px 1px 1px #4e4e4e'
            },
          }}
          id="custom-input-demo"
          options={options}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input type="text" {...params.inputProps} />
            </div>
          )}
        /> */}


      </label>

    </form>

  );
}

export default Search;