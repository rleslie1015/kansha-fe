import React from 'react';
import Auth from './Auth';
import Button from '@material-ui/core/Button';

const auth = new Auth();

export default function Login() {
    const state = {
        credentials: {
            username: '',
            password: '',
            auth,
        },
    };

    const handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            },
        });
    };

    const login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/');
        });
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={auth.login}
                style={{
                    backgroundColor: '#349AFA',
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                Login
            </Button>
        </div>
    );
}
