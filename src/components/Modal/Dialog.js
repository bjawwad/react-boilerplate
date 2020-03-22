import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMain: {
    width: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '5px',
  },
}));

const Dialog = ({ children, isOpen }) => {
  const classes = useStyles();
  return (
    <Modal open={isOpen} className={classes.modal}>
      <div className={classes.modalMain}>{children}</div>
    </Modal>
  );
};

Dialog.propTypes = {
  // children: PropTypes.arrayOf[Pri]
  //   p
};

export default Dialog;
