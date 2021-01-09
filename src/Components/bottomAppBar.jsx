import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


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
    minHeight: 20
  },
  customTool:{
    maxHeight:10,

  }
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return ( 
    <div className={classes.root}>
      <AppBar position="static" className={`${classes.customColor} ${classes.customHeight}`}>
      <Toolbar className={classes.customTool}>
      <Typography variant="caption" display="block" gutterBottom>
          © MD Automation 2021
          </Typography>
          </Toolbar>
      </AppBar>
    </div>
  );
}
