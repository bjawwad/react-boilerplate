import React from 'react';

// Material ui
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const shareDocStyles = makeStyles(() => ({
  shareDocMain: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    padding: '30px',
  },
}));

const exportDocStyles = makeStyles(() => ({
  exportDocMain: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    borderTop: 'solid #eaeaea 0.5px',
    borderBottom: 'solid #eaeaea 0.5px',
  },
}));

const sharePeopleStyles = makeStyles(() => ({
  sharePeopleMain: {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
  },
  title: {
    padding: '20px',
  },
  content: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  textControl: {
    height: '40px',
    fontSize: '14px',
  },
  commentLabel: {
    paddingTop: '20px',
    paddingBottom: '10px',
    color: '#adadad',
  },
}));

const ShareDoc = () => {
  const shareDocClasses = shareDocStyles();
  const exportDocClasses = exportDocStyles();
  const sharePeopleClasses = sharePeopleStyles();
  return (
    <div className={shareDocClasses.shareDocMain}>
      <div className={exportDocClasses.exportDocMain}>
        <div className={shareDocClasses.title}>
          <span>Export Report as an Excel (.xls) file format</span>
          <Fab
            style={{
              width: '100px',
              height: '31px',
              marginLeft: '25px',
              textTransform: 'none',
            }}
            variant="extended"
            color="primary"
          >
            Download
          </Fab>
        </div>
      </div>

      <div className={sharePeopleClasses.sharePeopleMain}>
        <div className={sharePeopleClasses.title}>
          <span>Share it with others</span>
        </div>
        <div className={sharePeopleClasses.content}>
          <TextField
            style={{ flex: 1 }}
            variant="outlined"
            InputProps={{
              classes: {
                root: sharePeopleClasses.textControl,
              },
            }}
          />

          <label className={sharePeopleClasses.commentLabel}>
            Add a comment
          </label>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={5}
            style={{
              borderRadius: '5px',
              borderColor: '#c4c4c4',
              resize: 'vertical',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShareDoc;
