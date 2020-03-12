import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DidYouKnow from '../../components/Landing/DidYouKnow';

Enzyme.configure({ adapter: new Adapter() });

describe('renders correctly', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<DidYouKnow />);

		expect(wrapper.exists());
	});
});
