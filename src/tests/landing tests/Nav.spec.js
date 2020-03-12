import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from '../../components/Landing/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('Nav component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Nav />);

		expect(wrapper.exists());
	});

	it('renders Kansha on Nav for h3', () => {
		const wrapper = shallow(<Nav />);

		expect(wrapper.find('h3').text()).toEqual('Kansha');
	});
});

describe('Nav links', () => {
	it('renders Login link for first link', () => {
		const wrapper = shallow(<Nav />);

		expect(
			wrapper
				.find('a')
				.first()
				.text(),
		).toEqual('Login');
	});

	it('renders Login twice', () => {
		const wrapper = shallow(<Nav />);
		const Login = wrapper.find("[data-test='login']");
		expect(Login.length).toBe(2);
	});

	it('renders 4 links', () => {
		const wrapper = shallow(<Nav />);
		const links = wrapper.find('a');
		expect(links.length).toBe(4);
	});
});

describe('Side nav', () => {
	it('renders side nav', () => {
		const wrapper = shallow(<Nav />);
		const sideNav = wrapper.find("[data-test='side-nav-landing']");
		expect(sideNav.exists());
	});
});

describe('Hamburger menu', () => {
	it('renders Hamburger menu', () => {
		const wrapper = shallow(<Nav />);

		expect(
			wrapper
				.find('section')
				.first()
				.text(),
		).toEqual('<HamburgerMenu />');
	});
});
