import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '150px', 
    height:'100px'
       
  },
  media: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit:'contain'
  },

}));


export default function ClientCard(prop) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <img src={process.env.PUBLIC_URL+'/pic/'+prop.image+'.png'} className={classes.media}/>
    </div>
  
  );
}
