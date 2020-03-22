import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const contentStyles = makeStyles(() => ({
  contentMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const DialogContent = ({ children }) => {
  const classes = contentStyles();
  return <div className={classes.contentMain}>{children}</div>;
};

export default DialogContent;
