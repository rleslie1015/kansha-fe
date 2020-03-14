import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EnterEmail from '../../components/Landing/EnterEmail';

Enzyme.configure({ adapter: new Adapter() });

describe('Enter Email component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<EnterEmail />);

		expect(wrapper.exists());
	});

	it('renders form', () => {
		const wrapper = shallow(<EnterEmail />);

		expect(wrapper.contains(<form></form>));
	});
});

describe('EnterEmail button', () => {
	it('renders Get Started in button', () => {
		const wrapper = shallow(<EnterEmail />);

		expect(wrapper.find('button').text()).toEqual('Get Started');
	});

	it('onClick function used when clicked', () => {
		const wrapper = shallow(<EnterEmail />);

		expect(wrapper.simulate('click').prop('onClick'));
	});
});
