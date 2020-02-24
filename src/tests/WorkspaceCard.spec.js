import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Workspace_Card from '../Workspace_Card';

const fitleredTeam = [
	{
		first_name: 'Matt',
		last_name: 'Masters',
		email: 'matt@mattmasters.dev',
		password: 'IamMatt!123',
		job_title: 'Dev God',
		department: 'Department of Gods',
		org_name: 'Ion',
		user_type: 'Admin',
	},
	{
		first_name: 'Ty',
		last_name: 'Lippe',
		email: 'ty@tylippe.dev',
		password: 'IamTy!123',
		job_title: 'Dev Apprentice',
		department: 'Department of Devs',
		org_name: 'Ion',
		user_type: 'Mod',
	},
	{
		first_name: 'Andrew',
		last_name: 'Goenner',
		email: 'andrew@andrewgoenner.dev',
		password: 'IamAndrew!123',
		job_title: 'Dev Popcicle',
		department: 'Department of Popcicles',
		org_name: 'Ion',
		user_type: 'Standard',
	},
];

Enzyme.configure({ adapter: new Adapter() });

describe('Workspace Card', () => {
	it('it should find an avatar in the workspace card', () => {
		const wrapper = shallow(<Workspace_Card team={fitleredTeam} />);

		expect(wrapper.find(Avatar));
	});

	it('it should fire a click event to button', () => {
		const wrapper = shallow(<Workspace_Card team={fitleredTeam} />);

		wrapper
			.find(Button)
			.first()
			.simulate('click');
		expect(wrapper.prop('onClick'));
	});

	it('it should find seeded user data', () => {
		const wrapper = shallow(<Workspace_Card team={fitleredTeam} />);

		wrapper.find(Typography).find('Dev God');
	});
});
