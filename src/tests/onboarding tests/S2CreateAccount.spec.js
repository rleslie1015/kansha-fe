import React from 'react';
import Enzyme, { render } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import S2CreateAccount from '../../components/Onboarding/S2CreateAccount';
import {BrowserRouter} from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() });

const setup = (props={user, setUser, handleUser}, state=null) => {
    return mount(<BrowserRouter>
                        <S2CreateAccount {...props} user={user}/>
                    </BrowserRouter>)
}

test('it renders without error', () => {
    const wrapper = setup();
    expect(wrapper).toExist();
})

// describe('the user populates the input', () => {
//     const testname = 'John' beforeEach(() => {
//         const input = wrapper.find('input').first()
//         input.simulate('change', {
//             target: {value: testname}
//         })
//     }) test('should update the state property `testname`', () => {
//         expect(wrapper.state().testname).toEqual(testname)
//     })
// })

