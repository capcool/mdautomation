import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClientCard from './ClientCard';

const useStyles = makeStyles((theme) => ({
  flexcontainer: {
    display: 'flex',
    flexWrap:'wrap',
    columnGap:'20px',
    paddingBottom:20
  }
  
}));

export default function ClientComponent() {
  const classes = useStyles();

  return ( 
    <>
    <div>Our Cliets</div>
    <div className={classes.flexcontainer}>
      <ClientCard image="c1"/>
      <ClientCard image="c2"/>
      <ClientCard image="c3"/>
      <ClientCard image="c4"/>
      <ClientCard image="c5"/>
      <ClientCard image="c6"/>
      <ClientCard image="c7"/>
    </div>
    </>
  );
}
