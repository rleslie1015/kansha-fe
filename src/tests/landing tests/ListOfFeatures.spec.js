import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListOfFeatures from '../../components/Landing/ListOfFeatures';

Enzyme.configure({ adapter: new Adapter() });

describe('List of Features Title', () => {
	it('renders Recognize, motivate, and track accomplishments. as title', () => {
		const wrapper = shallow(<ListOfFeatures />);

		expect(wrapper.find('h2').text()).toEqual(
			'Recognize, motivate, and track accomplishments.',
		);
	});
});
