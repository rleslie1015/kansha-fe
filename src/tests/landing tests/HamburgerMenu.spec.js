import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HamburgerMenu from '../../components/Landing/HamburgerMenu';

Enzyme.configure({ adapter: new Adapter() });

describe('Hamburger button', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<HamburgerMenu />);

		expect(wrapper.exists());
	});

	it('renders button', () => {
		const wrapper = shallow(<HamburgerMenu />);

		expect(wrapper.find('button').exists());
	});
});

describe('onClick action', () => {
	it('first onClick setsOpen', () => {
		const spy = jest.fn();
		const wrapper = shallow(<HamburgerMenu setOpen={spy} />);

		wrapper.find('button').simulate('click');
		wrapper.update();
		expect(spy).toBeCalled();
	});

	it('second onClick setsOpen', () => {
		const spy = jest.fn();
		const wrapper = shallow(<HamburgerMenu setOpen={spy} />);

		wrapper
			.find('span')
			.first()
			.simulate('click');
		wrapper.update();
		expect(spy).toBeCalled();
	});

	it('second onClick setsOpen', () => {
		const spy = jest.fn();
		const wrapper = shallow(<HamburgerMenu setOpen={spy} />);

		wrapper
			.find('span')
			.last()
			.simulate('click');
		wrapper.update();
		expect(spy).toBeCalled();
	});
});
