import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../Sidebar';
import { Drawer, IconButton } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('<Sidebar />', () => {
    it('it should find a drawer in the sidebar menu', () => {
      const wrapper = shallow(<Sidebar />);
      expect(wrapper.find(Drawer)).toHaveLength(1);
    });

    it('it should find the word Home in the sidebar menu', () => {
        const wrapper = shallow(<Sidebar />);
        expect(wrapper.find('Home'))
    });

    it('it should fire a click event to open the menu', () => {
        const wrapper = shallow(<Sidebar />);

        wrapper.find(IconButton).first().simulate('click');
        // expect(wrapper.find({className: classes.drawerOpen}))
    })

    it('it should fire a click event to close the menu', () => {
        const wrapper = shallow(<Sidebar />);

        wrapper.find(IconButton).last().simulate('click');
        // expect(wrapper.find({className: classes.drawerOpen}))
    })
})


    