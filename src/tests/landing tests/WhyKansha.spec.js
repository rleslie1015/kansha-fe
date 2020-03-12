import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WhyKansha from '../../components/Landing/WhyKansha';

Enzyme.configure({ adapter: new Adapter() });

describe('Why Kansha Title', () => {
	it('renders Why Kansha as title', () => {
		const wrapper = shallow(<WhyKansha />);

		expect(wrapper.find('h2').text()).toEqual('Why Kansha?');
	});
});
