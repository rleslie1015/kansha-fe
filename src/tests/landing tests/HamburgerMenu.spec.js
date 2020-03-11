import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HamburgerMenu from '../../components/Landing/HamburgerMenu';

Enzyme.configure({ adapter: new Adapter() });

describe('Hamburger button', () => {
	it('renders button', () => {
		const wrapper = shallow(<HamburgerMenu />);

		expect(wrapper.find('button').exists());
	});
});
