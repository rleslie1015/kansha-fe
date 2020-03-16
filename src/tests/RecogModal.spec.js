import React from 'react';
import { wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecogModal from '../Components/RecogModal/index';
import { renderWithRouterAndRedux } from './utils';

describe('<RecogModal />', () => {
	it('should render', () => {
		return wait(() => {
			const { container } = renderWithRouterAndRedux(
				<RecogModal profile={{ id: 2 }} />,
			);
			expect(container).toBeInTheDocument();
		});
	});
});
