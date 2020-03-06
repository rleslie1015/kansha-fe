import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecogModal from '../Components/RecogModal/index';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('<RecogModal />', () => {
	it('it should find a button in the recog modal', () => {
		const wrapper = shallow(
			<provider>
				<RecogModal />
			</provider>,
		);
		expect(wrapper.find());
	});

	it('it should find a modal in the recog modal', () => {
		const wrapper = shallow(
			<provider>
				<RecogModal />
			</provider>,
		);
		expect(wrapper.find());
	});

	it('it should find a fade in the recog modal', () => {
		const wrapper = shallow(
			<provider>
				<RecogModal />
			</provider>,
		);
		expect(wrapper.find());
	});

	it('it should find a text field in the recog modal', () => {
		const wrapper = shallow(
			<provider>
				<RecogModal />
			</provider>,
		);
		expect(wrapper.find());
	});
});
