import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    }
}))

export default function Footer() {
    const classes = useStyles();

    return(
        <>
        <div>
        <h4>Kansha</h4>
        <h5>Lambda Labs Project</h5>
        </div>
        <div>
        <Link href = '#'>About us</Link>
        <Link href = '#'>Features</Link>
        <Link href = '#'>Sign in</Link>
        <Link href = '#'>Sign up</Link>
        </div>
        <small>© All Rights Reserved 2019 Kansha</small>
        </>
    )
}