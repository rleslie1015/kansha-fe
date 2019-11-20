import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../Sidebar';
import useStyles from '../Sidebar';
import { Drawer } from '@material-ui/core';

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
})


    