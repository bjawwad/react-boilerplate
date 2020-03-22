import React from 'react';

// Material ui
import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles(() => ({
  headerMain: {
    display: 'flex',
    flex: '1',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 15px 5px 20px',
  },
  headerCross: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'lightgray',
    cursor: 'pointer',
  },
}));

const DialogHeader = ({ children, closeButton, onClose }) => {
  const classes = headerStyles();
  return (
    <div className={classes.headerMain}>
      {children}
      {closeButton && (
        <div
          className={classes.headerCross}
          onClick={() => {
            onClose();
          }}
        >
          <span className="material-icons">clear</span>
        </div>
      )}
    </div>
  );
};

export default DialogHeader;
