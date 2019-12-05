import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../Components/Profile/Profile';
import { Container, Typography } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('<Profile />', () => {
    it('it should find a container in the profile', () => {
        const wrapper = shallow(<provider><Profile /></provider>);
        expect(wrapper.find(Container));
    });

    it('', () => {
      const wrapper = shallow(<provider><Profile /></provider>);
      expect(wrapper.exists(Typography))
    });
})