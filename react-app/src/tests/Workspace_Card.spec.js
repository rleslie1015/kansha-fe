import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Workspace_Card from '../Workspace_Card';
import { Button } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('Workspace Card', () => {
    it('it should find the word Thank in the sidebar menu', () => {
        const wrapper = shallow(<Workspace_Card team={fitleredTeam.length > 0 ? fitleredTeam : team} />);
        expect(wrapper.find('Thank'))
    });

    it('it should fire a click event to button', () => {
        const wrapper = shallow(<Workspace_Card team={fitleredTeam.length > 0 ? fitleredTeam : team}/>);

        wrapper.find(Button).first().simulate('click');
        expect(wrapper.prop('onClick'))
    })
})
