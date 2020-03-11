import React from "react";
import { render,fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import  S6AllDone from '../../components/Onboarding/S6AllDone';
import {BrowserRouter} from 'react-router-dom'
import {renderWithRouter} from '../testUtils';


let S6Component = <BrowserRouter><S6AllDone /></BrowserRouter>;
test("S6AllDone renders without crashing", () => {
  render(S6Component);
  
});

test('it renders the all done and let me explore text', () => {
    const { getAllByText } = render(S6Component);
    getAllByText(/All done!/i);
    getAllByText(/Let me explore/i);
  

})
test("expect to have class previousarrow", () => {
    const { getByText } = render(S6Component);
    const previous = getByText(/Previous step/i);
  
  
    expect(previous).toHaveClass("testing");

  });
  it('should redirect to step-4', () => {
    const { getByText, history } = renderWithRouter(<S6AllDone />);
    
    const button = getByText(/Previous step/i);
    fireEvent.click(button);
    // console.log(history)
    expect(history.location.pathname).toBe('/onboarding/step-4');
  });