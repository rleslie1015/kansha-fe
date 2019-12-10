import React, { useState, useEffect } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import 'typeface-montserrat';
import 'typeface-roboto';
import WorkspaceCard from './Workspace_Card';
import { axiosWithAuth } from './utils/axiosWithAuth';

const useStyles = makeStyles(theme => ({
	container: {
		fontFamily: 'Montserrat',
		backgroundColor: '#26242D',
	},
	root: {
		width: '100vw',
		minHeight: '100vh',
		paddingTop: '2.5rem',
	},
	main_header: {
		margin: '40px 20px',
		fontSize: '3rem',
	},
	header_container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.95),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 1),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#959595',
	},
	inputRoot: {
		color: '#959595',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 200,
			'&:focus': {
				width: 250,
			},
		},
	},
}));

export default function Workspace() {
	const classes = useStyles();

	const [team, setTeam] = useState([]);

	const [fitleredTeam, setFilteredTeam] = useState([]);
	// console.log(fitleredTeam);

	useEffect(() => {
		axiosWithAuth()
			.get('/users')
			.then(res => {
				setTeam(res.data);
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const searchWorkPlaceHandler = e => {
		console.log(e.target.value);

		const user = team.filter(
			t =>
				t.first_name.toLowerCase().includes(e.target.value) ||
				t.last_name.toLowerCase().includes(e.target.value),
		);
		setFilteredTeam(user);
	};

	return (
		<div className={classes.container}>
			<Container fixed className={classes.root}>
				<div className={classes.header_container}>
					<h1 className={classes.main_header}>Workspace</h1>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon color="inherit" />
						</div>
						<InputBase
							placeholder="Search Workspace…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
							onKeyUp={searchWorkPlaceHandler}
							type="text"
						/>
					</div>
				</div>
				<WorkspaceCard
					team={fitleredTeam.length > 0 ? fitleredTeam : team}
				/>
			</Container>
		</div>
	);
}
