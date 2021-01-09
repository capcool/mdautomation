import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClientCard from './ClientCard';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  flexcontainer: {
    display: 'flex',
    flexWrap:'wrap',
    columnGap:'20px',
    paddingBottom:20,
    paddingLeft:20
  },
  topBox:{
    padding:10
  }
  
}));

export default function ClientComponent() {
  const classes = useStyles();

  return ( 
    <>
    <div className={classes.topBox}>
      <div className={classes.topBox}>
    <Typography variant="h6" gutterBottom>
       Our Clients
      </Typography>
      </div>
    <Divider />
    <Divider />
    </div>
    <div className={classes.flexcontainer}>
      <ClientCard image="c1"/>
      <ClientCard image="c2"/>
      <ClientCard image="c3"/>
      <ClientCard image="c4"/>
      <ClientCard image="c5"/>
      <ClientCard image="c6"/>
      <ClientCard image="c7"/>
    </div>
    <div className={classes.topBox}>
    <Divider />
    <Divider />
    </div>
    </>
  );
}
