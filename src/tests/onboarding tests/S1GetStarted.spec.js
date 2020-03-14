import React from 'react';
import Enzyme from 'enzyme';
import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import S1GetStarted from '../../components/Onboarding/S1GetStarted';

Enzyme.configure({ adapter: new Adapter() });

it("renders correctly", () => {
    const wrapper = shallow(
        <S1GetStarted />
    );
    const S1Component = wrapper.find("[data-test='S1Component']");
    expect(S1Component.length).toBe(1)
});

test('renders continue button', () => {
    const wrapper = shallow(
        <S1GetStarted />
    );
    const button = wrapper.find("[data-test='S1Button']");
    expect(button.length).toBe(1)
    
})