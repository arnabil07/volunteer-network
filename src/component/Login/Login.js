import React, { useContext } from 'react';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from '../../logos/Group 1329.png';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { Box } from '@material-ui/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const user = res.user;
            const {displayName, email} = res.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser)
            history.replace(from);
            console.log(signedInUser)
        })
    }

    return (
        <div>
            <div className="logo text-center" >
            <img src={logo} alt="" />
            </div>

            <div className="login-form">
                <h3><strong>Login with</strong></h3>
            <button onClick={googleSignIn}>Continue with Google Login</button>        
           
        </div>
        </div>
    );
};

export default Login;