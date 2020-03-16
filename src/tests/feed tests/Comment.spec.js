import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import mockAxios from 'axios';

import { Comment } from '../../components/Feed/Comment';
import { renderWithRouter } from '../utils';

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

	it('onClick handleDelete', () => {
		const { container } = renderWithRouter(
			<Comment
				comment={{ date: '2020/03/01' }}
				profile={{ user_type: 'admin' }}
			/>,
		);
		window.confirm = () => true;
		const trashcan = container.querySelector('svg');
		fireEvent.click(trashcan);
		expect(mockAxios.delete).toHaveBeenCalled();
	});
});
