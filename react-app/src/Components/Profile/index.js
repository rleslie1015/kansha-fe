import React, { useEffect, useState } from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../../utils/axiosWithAuth'


export const PeerProfile = ({ match }) => {
    const [ profile, setProfile ] = useState()

    const { id } = match.params;

    useEffect(() => {
        axiosWithAuth().get(`/profile/${id}`)
            .then(({data}) => setProfile(data.peer))
    }, [id])

    if (profile) {
        console.log(profile)
        return <Profile {...{ profile }} isPeer/>
    } else {
        return <>loading...</>
    }
}

export const UserProfile = connect(({user}) =>({...user}), {})(Profile)

export { Profile }