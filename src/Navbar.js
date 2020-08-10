import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { borders } from '@material-ui/system';
import './Navbar.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <div color="transparent" >
        <Toolbar>
          <IconButton edge="start">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <h1 className="headtag"> Maxeon </h1>
          </Typography>
          
          <Button className="button_prop" size = 'large'>Products</Button>
          <Button className="button_prop" size = 'large'>Features</Button>
          <Button className="button_prop" size = 'large'>Use Cases</Button>
          <Button className="button_prop" size = 'large'>Pricing</Button>
          <Button className="button_prop" size = 'large'>Login</Button>
        </Toolbar>
      </div>
  );
}