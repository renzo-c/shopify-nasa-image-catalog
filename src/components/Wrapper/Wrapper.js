import React from 'react';
import useStyles from './wrapper-styles';

const Wrapper = ({ children }) => {
  const classes = useStyles({ color: '#F7F7F9' });
  return (
    <div className={classes.root}>
      <div className={classes.html}></div>
      {children}
    </div>
  );
};

export default Wrapper;
