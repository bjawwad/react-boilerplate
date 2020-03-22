import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ShareDoc from './components/ShareDocument/ShareDoc';
import {
  Dialog,
  useDialog,
  DialogHeader,
  DialogFooter,
  DialogContent,
} from './components/Modal';

const App = () => {
  const { isShowing, toggle } = useDialog();
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          toggle();
        }}
      >
        Modal!
      </Button>

      <Dialog isOpen={isShowing}>
        <DialogHeader closeButton onClose={toggle}>
          <h3>Export this report</h3>
        </DialogHeader>

        <DialogContent>
          <ShareDoc />
        </DialogContent>

        <DialogFooter>
          <Fab
            style={{
              marginRight: '10px',
              width: '84px',
              height: '31px',
              textTransform: 'none',
            }}
            variant="extended"
            size="small"
            color="primary"
          >
            Send
          </Fab>
          <Fab
            style={{ width: '84px', height: '31px', textTransform: 'none' }}
            variant="extended"
            size="small"
          >
            Cancel
          </Fab>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default App;
