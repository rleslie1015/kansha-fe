import React from 'react';
import Enzyme, { render } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Landing/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Header />);

		expect(wrapper.exists());
	});

	it('should render Kansha h1', () => {
		const wrapper = shallow(<Header />);
		const h1 = wrapper.find('h1');
		const result = h1.text();

		expect(result).toBe('Kansha');
	});
});
