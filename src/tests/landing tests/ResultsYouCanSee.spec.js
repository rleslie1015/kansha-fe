import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsYouCanSee from '../../components/Landing/ResultsYouCanSee';

Enzyme.configure({ adapter: new Adapter() });

describe('Results You Can See Title', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<ResultsYouCanSee />);

		expect(wrapper.exists());
	});

	it('renders Resulst You Can See as title', () => {
		const wrapper = shallow(<ResultsYouCanSee />);

		expect(wrapper.find('h2').text()).toEqual('Results you can see');
	});
});
