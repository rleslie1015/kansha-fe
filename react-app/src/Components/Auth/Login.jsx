import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/user-actions'
import { Redirect } from 'react-router-dom'

function Login ({ isLoggingIn, login, profile, component: Component}) {
    useEffect(() => {
        login();
    }, [login])

    if (localStorage.getItem('id_token') && !isLoggingIn && profile) {
        return <Component />
    } else if (!localStorage.getItem('id_token') && !isLoggingIn) {
        return <Redirect to="/" />
    } else {
        return <h1>Loading...</h1>
    }
}

export default connect(({user})=> ({...user}), {login})(Login)