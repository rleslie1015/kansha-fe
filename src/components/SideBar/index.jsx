import React from 'react';
import { connect } from 'react-redux';
import Hamburger from './Hamburger';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { ReactComponent as WorkspaceIcon } from '../../assets/workspacenav.svg';
import { ReactComponent as SendIcon } from '../../assets/send.svg';
import { ReactComponent as HistoryIcon } from '../../assets/history.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { ReactComponent as PowerIcon } from '../../assets/signout.svg';
import { SidebarLink } from './SideBarLink';
import { signout } from '../Auth';

function Sidebar({ user }) {
	const [open, setOpen] = React.useState(false);

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
				<SidebarLink path="/" name="Home" icon={HomeIcon} open={open} />
				<SidebarLink
					path={`/profile/${user.profile.id}`}
					name="Profile"
					icon={ProfileIcon}
					open={open}
					className="fill-white"
				/>
				<SidebarLink
					path="/workspace"
					name="Workspace"
					icon={WorkspaceIcon}
					open={open}
					className="fill-white"
				/>
				<SidebarLink
					path="/workspace#send_reward"
					name="Send Reward"
					icon={SendIcon}
					open={open}
					className="fill-white"
				/>
				<SidebarLink
					path="/profile#history"
					name="Rewards History"
					icon={HistoryIcon}
					open={open}
				/>
				<SidebarLink
					path="/settings"
					name="Settings"
					icon={SettingsIcon}
					open={open}
					className="fill-white"
				/>
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
