import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import { authorizeUser } from '../../store/actions/user-actions'
import Auth from '../../utils/auth'

const auth = new Auth();

function AuthLoader ({ authorizeUser, authenticated }) {
    useEffect(() => {
        authorizeUser(auth);
    }, [authorizeUser])

    return (<p>loading...</p>)
}

export default connect(state => ({...state}), {authorizeUser})(AuthLoader)