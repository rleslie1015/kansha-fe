import React from "react";
import { render,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import S4UserUpload from '../../components/Onboarding/S4AUserUpload';
import {BrowserRouter} from 'react-router-dom'

let S4Component = <BrowserRouter><S4UserUpload /></BrowserRouter>;
test("S4UserUpload renders without crashing", () => {
  render(S4Component);
  
});

test('it displays add employees question', () => {
    const { getByText, getAllByText } = render(S4Component);
    getByText(/Would you like to add employees now?/i);
    getByText(/yes/i);
    getAllByText(/no/i);

})
test("the next button is clickable", () => {
    const button = jest.fn();
    const { getByText } = render(
        <BrowserRouter><S4UserUpload button={button}/></BrowserRouter>
    );
    const nextBtn = getByText(/next/i);
    fireEvent.click(nextBtn);
    expect(button).toHaveBeenCalled();
  });
  

//   const toggleLocked = jest.fn();
//   const { getByText } = render(
//     <Controls closed={false} toggleLocked={toggleLocked} />
//   );
//   const lockedBtn = getByText(/lock gate/i);
//   fireEvent.click(lockedBtn);
//   expect(toggleLocked).not.toHaveBeenCalled();
// });