import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../Components/Profile/Profile';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('<Profile />', () => {
	it('it should find a container in the profile', () => {
		const wrapper = shallow(
			<provider>
				<Profile />
			</provider>,
		);
		expect(wrapper.find());
	});

	it('it should find typography in the profile', () => {
		const wrapper = shallow(
			<provider>
				<Profile />
			</provider>,
		);
		expect(wrapper.exists());
	});
});
