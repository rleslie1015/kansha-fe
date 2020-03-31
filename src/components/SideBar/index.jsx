import React from 'react';
import { connect } from 'react-redux';
import Hamburger from './Hamburger';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
// import { ReactComponent as HistoryIcon } from '../../assets/history.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { ReactComponent as PowerIcon } from '../../assets/signout.svg';
import { ReactComponent as TeamIcon } from '../../assets/workspacenav.svg';
import { ReactComponent as HelpIcon } from '../../assets/HelpModalImgs/Help.svg';
import { SidebarLink } from './SideBarLink';
import { signout } from '../Auth';

// import { useHistory } from 'react-router-dom';

function Sidebar({ user }) {
	const [open, setOpen] = React.useState(false);

	// let history = useHistory();

	return (
		<section className={`side-nav${open ? ' is-open' : ''}`}>
			<section className="nav-hamburger" onClick={() => setOpen(!open)}>
				<Hamburger open={open} setOpen={setOpen} />
			</section>
			<section className={`${open ? 'side-nav-profile' : 'hidden'}`}>
				<img src={user.profile.profile_picture} alt="User" />
				<p>
					{user.profile.first_name} {user.profile.last_name}
				</p>
			</section>
			<nav>
				<SidebarLink
					path={
						user.profile.user_type.toLowerCase() === 'admin'
							? '/'
							: `/profile/${user.profile.id}`
					}
					name="Dashboard"
					icon={HomeIcon}
					open={open}
				/>

				{user.profile.user_type.toLowerCase() === 'admin' ? (
					<SidebarLink
						path={'/organization'}
						name="Teams"
						icon={TeamIcon}
						open={open}
					/>
				) : null}
				{user.profile.user_type.toLowerCase() === 'admin' ? (
					<SidebarLink
						path={`/profile`}
						name="Profile"
						icon={ProfileIcon}
						open={open}
						className="fill-white"
					/>
				) : null}

				{/* <SidebarLink
					path="/"
					name="Feed"
					icon={HistoryIcon}
					open={open}
				/> */}
				<SidebarLink
					path="/settings"
					name="Settings"
					icon={SettingsIcon}
					open={open}
					className="fill-white"
				/>

				{user.profile.user_type.toLowerCase() === 'admin' ? (
					<SidebarLink
						path="?help"
						name="Get help"
						icon={HelpIcon}
						open={open}
						className="help-btn"
					/>
				) : null}
			</nav>
			<section className="nav-signout" onClick={() => signout()}>
				<SidebarLink
					path="/signout"
					name="Sign Out"
					icon={PowerIcon}
					open={open}
					className="fill-white"
				/>
			</section>
		</section>
	);
}

export default connect(state => ({ ...state }), {})(Sidebar);
