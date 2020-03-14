import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { FeedComments } from '../../components/Feed/FeedComments';

Enzyme.configure({ adapter: new Adapter() });

let FeedCommentsComponent = (
	<BrowserRouter>
		<FeedComments />
	</BrowserRouter>
);

describe('FeedComments component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(FeedCommentsComponent);

		expect(wrapper.exists());
	});
});
