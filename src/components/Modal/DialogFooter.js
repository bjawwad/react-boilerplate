import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

const footerStyles = makeStyles(() => ({
  footerMain: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '5px 5px 20px 15px',
  },
}));

const DialogFooter = ({ children }) => {
  const classes = footerStyles();
  return <div className={classes.footerMain}>{children}</div>;
};

export default DialogFooter;
