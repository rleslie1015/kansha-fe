  
import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Onboarding from '../Onboarding.jsx'
import { TextField } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('<Onboarding />', () => {
    it('it should find a drawer in the sidebar menu', () => {
        const wrapper = shallow(<Onboarding />);
        expect(wrapper.find(TextField)).toHaveLength(5);
    })
})