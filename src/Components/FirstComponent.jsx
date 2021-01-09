import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootDiv: {
    display: 'flex',
    alignItems:'stretch',
    backgroundColor:'rgba(24,11,26,0.8)',
    maxHeight: '600px'
  },
  leftDiv: {
    flex:1,
    margin: 'auto',
    textAlign: 'center',
    color:'white',
    fontSize:'20px',
    [theme.breakpoints.down('sm')]:{
      fontSize:'10px',
    },
    
   
  },
  rightDiv: {
    flex:1,
    backgroundImage: `url(${process.env.PUBLIC_URL+'/pic/MD-Pic1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity:'0.6',
    paddingTop: '26%'
  },
  title:{
    fontSize:'30px',
  },
  titleRed:{
    fontSize:'30px',
    color:'Red'
  }
}));

export default function FirstComponent() {
  const classes = useStyles();

  return ( 
    <div className={classes.rootDiv}>
        <div className={classes.leftDiv}> 
        <span className={classes.titleRed}>MD </span><span className={classes.title}>Automation</span>
        <p>Total process solution <br/>
        for <br/>
        Automation , Electrical & Instrumentation </p>
        </div>
        <div className={classes.rightDiv}>
        </div>
      
    </div>
  );
}
