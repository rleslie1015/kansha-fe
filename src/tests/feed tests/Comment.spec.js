import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { Comment } from '../../components/Feed/Comment';

Enzyme.configure({ adapter: new Adapter() });
const spy = jest.fn();

let CommentComponent = (
	<BrowserRouter>
		<Comment handleDelete={spy} />
	</BrowserRouter>
);

describe('Comment component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(CommentComponent);

		expect(wrapper.exists());
	});
});

it.skip('onClick handleDelete', () => {
	const wrapper = shallow(CommentComponent);

	wrapper
		.find('Trashcan')
		.last()
		.simulate('click');
	wrapper.update();
	expect(spy).toBeCalled();
});
