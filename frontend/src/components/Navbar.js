import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar(props){
    const { userCredentials } = props;

    const links = userCredentials ? <SignedInLinks/> : <SignedOutLinks/>;

    const handleHomeClick = () => {
        props.history.push('/')
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        title: {
          flexGrow: 1,
        },
      }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar title="aaa" position="static">
            <Toolbar>
              <Button onClick={handleHomeClick} color="inherit">TodoListK</Button>
              <Typography variant="h6" className={classes.title}/>
              {links}
            </Toolbar>
          </AppBar>
        </div>
      );
}

const mapStateToProps = (state) => {
    return{
        userCredentials: state.auth.userCredentials,
    }
}
  
export default compose(withRouter, connect(mapStateToProps)) (Navbar)