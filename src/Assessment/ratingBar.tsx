import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles: any = makeStyles(theme => ({
  ratingWrapper: {
    display: 'flex',
    backgroundColor: '#E1E1E1',
    borderRadius: 15,
    width: 245,
  },
  selectedRatingBox: {
    padding: '4px 8px 1px 8px',
    color: '#fff',
  },
  unSelectedRatingBox: {
    padding: '4px 8px 1px 8px',
    color: '#747474',
    backgroundColor: '#E1E1E1',
  },
  borderLeft: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  borderRight: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
}));

export default ({ value }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.ratingWrapper}>
      {Array(value)
        .fill('')
        .map((_, i) => (
          <div
            key={i}
            style={
              value > 5
                ? { backgroundColor: '#27AE60' }
                : { backgroundColor: '#EB5757' }
            }
            className={`${i === 0 && classes.borderLeft} ${i === value - 1 &&
              classes.borderRight} ${classes.selectedRatingBox}`}
          >
            {i + 1}
          </div>
        ))}
      {Array(10 - value)
        .fill('')
        .map((_, i) => (
          <div
            key={i}
            className={`${i === 10 - value - 1 && classes.borderRight} ${
              classes.unSelectedRatingBox
            }`}
          >
            {value + i + 1}
          </div>
        ))}
    </div>
  );
};
