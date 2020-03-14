import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import Index from '../../components/Feed/index';

Enzyme.configure({ adapter: new Adapter() });

let IndexComponent = (
	<BrowserRouter>
		<Index />
	</BrowserRouter>
);

describe('Index component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(IndexComponent);

		expect(wrapper.exists());
	});
});
