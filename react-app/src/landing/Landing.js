import React from 'react';
import Main from './Main';
import Footer from './Footer'
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#26242D'
    }
}))

export const Landing = () => {

    return (
        <>
        {/* <NavBar /> */}
        
        <Header />
        <Main />
        <Footer />
        </>
    )
}