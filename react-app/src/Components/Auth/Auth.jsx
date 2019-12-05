import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { authorizeUser } from '../../store/actions/user-actions'
import { Redirect } from 'react-router-dom'
import { Login } from './'
import Auth from '../../utils/auth'

const auth = new Auth();

function AuthLoader ({ authorizeUser, authenticated, error }) {
    useEffect(() => {
        authorizeUser(auth);
    }, [authorizeUser])

    if (authenticated) {
        return <Login component={()=><Redirect to="/profile"/>} />
    } else if (!authenticated && error) {
        return <Redirect to="/"/>
    } else { 
        return (<p>loading...</p>) 
    }
}

export default connect(({user}) => ({...user}), {authorizeUser})(AuthLoader)