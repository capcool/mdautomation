import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 480,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardService() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <RoomServiceOutlinedIcon/>
          </Avatar>
        }
        title="Service"
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL+'/pic/MD-Pic2.jpg'}
        title="Services"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        MD Automation is an engineering company in the field of Industrial
        Automation.MD Automation (Previously known as Elegant Automation) is best known in the business field of Electrical,
        Instrumentation & Automation Engineering since 2015.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        
          <Typography paragraph>
            MD Automation is an engineering company in the field of Industrial
            Automation. MD Automation (Previously known as Elegant
            Automation) is best known in the business field of Electrical,
            Instrumentation & Automation Engineering since 2015. The company is
            driven by a balanced team of senior as well as young yet experienced
            engineering professionals with experiences & exposures in national
            industries
          </Typography>
          <Typography paragraph>
            Our services include control software design and
            development, PLC programming and system integration. We
            also support Calibration & Servicing of different types of
            Instruments like Pressure Measuring Instrument (PT,DPT,PG,
            PS) Temperature Measuring Instrument like (RTD,
            Thermocouple, TG, TS) Calibration of control Valve, Various
            Damper, Pneumatic Valves etc.

          </Typography>
          <Typography paragraph>
            We have a group of technical experts who have experience in
            undertaking complete automation job on turnkey basis, viz.,
            Drawing, Design, software writing Erection and
            Commissioning, Training of manpower at site.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
