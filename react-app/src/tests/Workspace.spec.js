import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Workspace from '../Workspace';
import { InputBase, SearchIcon } from '@material-ui/core';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('Workspace', () => {

    let useEffect;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    it('Find word Workspace on page', () => {
        const wrapper = shallow(<Workspace />);
        expect(wrapper.find('Workspace'))
    });

    it('it should fire a key press event in the search bar ', () => {
        const wrapper = shallow(<Workspace />);

        wrapper.find(InputBase).first().simulate('keypress', { key: 'a' });
        expect(wrapper.prop('onKeyUp'))
    });

    it('it should find the icon in the search bar', () => {
        const wrapper = shallow(<Workspace />);

        expect(wrapper.find(<div><SearchIcon/></div>))

    })
})