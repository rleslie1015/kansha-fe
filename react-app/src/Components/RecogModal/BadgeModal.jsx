import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, Modal, Box, Button } from '@material-ui/core';
import { useSpring, animated } from 'react-spring/web.cjs';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
        position: 'absolute',
        transform: 'translate(0, 13%)',
        '@global': {
            '*::-webkit-scrollbar': {
                width: '.5rem',
            },
            '*::-webkit-scrollbar-corner': {
                backgroundColor: 'transparent',
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: '#2D2C35',
                borderRadius: '10px',
            },
        },
    },
    paper: {
		backgroundColor: '#3A3845',
		border: '2px solid #000',
		boxShadow: 'none',
		padding: theme.spacing(2, 4, 3),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
        color: 'white',
        width: '568px',
        height: '200px',
    },
    badgeBox: {
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'scroll',
        width: '530px',
    },
    openFab: {
		position: 'absolute',
		transform: 'translate(900%, -130%)',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
	},
	addBadge: {
		width: '80%',
		height: 'auto',
		color: '#FFFFFF',
    },
    closeFab: {
		position: 'absolute',
		transform: 'translate(442%, 190%)',
		background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
    },
    closeBadge: {
        width: '80%',
		height: 'auto',
		color: '#FFFFFF',
    },
    badge: {
        width: '150px',
        height: '150px',
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

Fade.propTypes = {
	children: PropTypes.element,
	in: PropTypes.bool.isRequired,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
};

function BadgeModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
    };
    
    return (
        <div className={classes.root}>
            <Fab 
            className={classes.openFab}
            onClick={handleOpen}>
        		<AddCircleOutlineIcon className={classes.addBadge} />
      		</Fab>
            <Modal 
            	className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                hideBackdrop
            >
                <Fade in={open}>
					<div className={classes.paper}>
                        <Box className={classes.badgeBox}>
                            <Button onClick={handleClose}>
                            <img src={`https://kansha-bucket.s3-us-west-1.amazonaws.com/Jedi+Master.png`} className={classes.badge} />
                            </Button>
                            <Button onClick={handleClose}>
                            <img src={`https://kansha-bucket.s3-us-west-1.amazonaws.com/Jedi+Master.png`} className={classes.badge} />
                            </Button>
                            <Button onClick={handleClose}>
                            <img src={`https://kansha-bucket.s3-us-west-1.amazonaws.com/Jedi+Master.png`} className={classes.badge} />
                            </Button>
                            <Button onClick={handleClose}>
                            <img src={`https://kansha-bucket.s3-us-west-1.amazonaws.com/Jedi+Master.png`} className={classes.badge} />
                            </Button>
                            <Button onClick={handleClose}>
                            <img src={`https://kansha-bucket.s3-us-west-1.amazonaws.com/Jedi+Master.png`} className={classes.badge} />
                            </Button>
                            <Button onClick={handleClose}>
                            <img src={`https://kansha-bucket.s3-us-west-1.amazonaws.com/Jedi+Master.png`} className={classes.badge} />
                            </Button>
                        </Box>
                        <Fab 
                            className={classes.closeFab}
                            onClick={handleClose}>
        		                <HighlightOffIcon className={classes.closeBadge} />
      		                </Fab>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default BadgeModal