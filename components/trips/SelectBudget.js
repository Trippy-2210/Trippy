import { styled } from '@mui/material/styles';
import PaidIcon from '@mui/icons-material/Paid';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import Rating from '@mui/material/Rating';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#157811',
  },
  '& .MuiRating-iconHover': {
    color: '#157811',
  },
});

export default function SelectBudget({ value, setValue }) {
  return (
    <>
      <div>Budget:</div>
      <StyledRating
        name='customized-color'
        defaultValue={0}
        precision={1}
        icon={<PaidIcon fontSize='inherit' />}
        emptyIcon={<PaidOutlinedIcon fontSize='inherit' />}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
}
