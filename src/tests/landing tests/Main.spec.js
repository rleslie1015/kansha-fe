import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../../components/Landing/Main';

Enzyme.configure({ adapter: new Adapter() });

describe('Main Title', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Main />);

		expect(wrapper.exists());
	});

	it('renders Workplace recognition. title', () => {
		const wrapper = shallow(<Main />);

		expect(wrapper.find('h2').text()).toEqual('Workplace recognition.');
	});
});
