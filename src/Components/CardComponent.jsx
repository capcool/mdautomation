import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardAboutUs from './CardAboutUs';
import CardService from './CardService';
import CardAreaofExpertise from './CardAreaofExpertise';

const useStyles = makeStyles((theme) => ({
  flexcontainer: {
    display: 'flex',
    flexWrap:'wrap',
    columnGap:'5px'
  }
  
}));

export default function CardComponent() {
  const classes = useStyles();

  return ( 
    <div className={classes.flexcontainer}>
       <CardAboutUs/>
      <CardAreaofExpertise/>
      <CardService/>
      <CardAboutUs/>
      <CardAreaofExpertise/>
      <CardService/>
    </div>
  );
}
