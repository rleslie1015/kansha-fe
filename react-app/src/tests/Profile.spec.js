import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../Components/Profile/Profile';
import { Container } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('<Profile />', () => {
    it('it should find 3 containers in the profile', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.find(Container).toHaveLength(3));
      });

    // it('it should fire a click event to button', () => {
    //     const wrapper = shallow(<Workspace_Card team={fitleredTeam} />);

    //     wrapper.find(Button).first().simulate('click');
    //     expect(wrapper.prop('onClick'))
    // })

    // it('it should find seeded user data', () => {
    //     const wrapper = shallow(<Workspace_Card team={fitleredTeam} />);

    //     wrapper.find(Typography).find('Dev God')
    // })
})