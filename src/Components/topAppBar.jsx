import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: '#0B2F3A'
  },
  customHeight: {
    minHeight: 40
  }
}));

export default function TopAppBar() {
  const classes = useStyles();

  return ( 
    <div className={classes.root}>
      <AppBar position="static" className={`${classes.customColor} ${classes.customHeight}`}>
        <Toolbar>
            <HomeIcon/>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <div color="inherit">MD Automation</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
