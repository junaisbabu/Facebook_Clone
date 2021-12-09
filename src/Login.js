import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider' 
import './Login.css'

function  Login() {
        const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign In...
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        } )
        .catch((error) => alert(error.message));
    }

    return (
        <div className="login" >
            <div className="login_logo">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                <img src="https://1000logos.net/wp-content/uploads/2016/11/logo-fb.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
