import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../components/Landing/Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer Component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Footer />);

		expect(wrapper.exists());
	});

	it('renders Kansha on footer for h1', () => {
		const wrapper = shallow(<Footer />);

		expect(wrapper.find('h1').text()).toEqual('Kansha');
	});
});

describe('Listed items', () => {
	it('renders Instagram in first span', () => {
		const wrapper = shallow(<Footer />);

		expect(
			wrapper
				.find('span')
				.first()
				.text(),
		).toEqual('Instagram');
	});
});
