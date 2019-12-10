import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecogModal from '../Components/RecogModal/RecogModal.jsx'
import { Button, Modal, Fade, TextField, } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('<RecogModal />', () => {
    it('it should find a button in the recog modal', () => {
        const wrapper = shallow(<provider><RecogModal /></provider>);
        expect(wrapper.find(Button));
      });

      it('it should find a modal in the recog modal', () => {
        const wrapper = shallow(<provider><RecogModal /></provider>);
        expect(wrapper.find(Modal));
      });

      it('it should find a fade in the recog modal', () => {
        const wrapper = shallow(<provider><RecogModal /></provider>);
        expect(wrapper.find(Fade));
      });

      it('it should find a text field in the recog modal', () => {
        const wrapper = shallow(<provider><RecogModal /></provider>);
        expect(wrapper.find(TextField));
      });
})