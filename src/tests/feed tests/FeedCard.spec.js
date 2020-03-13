import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { FeedCard } from '../../components/Feed/FeedCard';

Enzyme.configure({ adapter: new Adapter() });

let FeedCardComponent = (
	<BrowserRouter>
		<FeedCard />
	</BrowserRouter>
);

describe('FeedCard component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(FeedCardComponent);

		expect(wrapper.exists());
	});
});
