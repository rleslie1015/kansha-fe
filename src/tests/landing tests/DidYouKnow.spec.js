import React from 'react';
import Enzyme from 'enzyme';
import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  DidYouKnow from '../../components/Landing/DidYouKnow';

Enzyme.configure({ adapter: new Adapter() });

it("renders correctly", () => {
    const wrapper = shallow(
        <DidYouKnow />
    );
    const DidYouKnow = wrapper.find("[data-test='didyouknow']");
    expect(DidYouKnow.length).toBe(1)
});

test('renders continue button', () => {
    const wrapper = shallow(
        <DidYouKnow />
    );
    const button = wrapper.find("[data-test='getstarted']");
    expect(button.length).toBe(1)
    
})