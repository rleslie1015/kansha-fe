import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
	Children
  } from "react";
  
  const DropDown = ({ children, selection, setSelection, id, placeholder }) => {
	const select = useRef(null);
	const fakeSelect = useRef(null);
	const fakeOptions = useRef(null);
	const [current, setCurrent] = useState(<div className="placeholder-div">{placeholder}</div>);
  
	const optionClick = e => {
	  const s = select.current;
	  const h = fakeSelect.current;
	  for (let i = 0; i < s.length; i++) {
		if (s.options[i].innerHTML === e.target.innerHTML) {
		  s.selectedIndex = i;
		  s.value = e.target.dataset.value;
		  setSelection(e.target.dataset.value);
		  h.innerHTML = e.target.innerHTML;
		  const y = e.target.parentNode.getElementsByClassName(
			"same-as-selected"
		  );
		  for (let k = 0; k < y.length; k++) {
			y[k].removeAttribute("class");
		  }
		  e.target.setAttribute("class", "same-as-selected");
		  break;
		}
	  }
	  h.click();
	};
  
	const closeAllSelect = elmnt => {
	  const x = fakeOptions.current;
	  const y = fakeSelect.current;
	  const arrNo = [];
	  for (let i = 0; i < y.length; i++) {
		if (elmnt === y[i]) {
		  arrNo.push(i);
		} else {
		  y[i].classList.remove("select-arrow-active");
		}
	  }
	  for (let i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
		  x[i].classList.add("select-hide");
		}
	  }
	};
  
	const selectClick = e => {
	  e.stopPropagation();
	  closeAllSelect(e.target);
	  fakeOptions.current.classList.toggle("select-hide");
	  e.target.classList.toggle("select-arrow-active");
	};
  
	
  
	// useEffect(() => {
	//   document.addEventListener("click", closeAllSelect);
	//   return () => {
	//     document.removeEventListener("click", closeAllSelect);
	//   };
	// }, [closeAllSelect]);
  

	const optionDivs = Children.map(children, option => {
	  return (
		<div onClick={optionClick} data-value={option.props.value}>
		  {option.props.children}
		</div>
	  );
	});
  
	return (
	  <div className="custom-select" style={{ width: "200px" }}>
		<select ref={select}>
		  {console.log(selection)}
		  {children}
		</select>
		<div id={id} className="select-selected" ref={fakeSelect} onClick={selectClick}>
		  {current}
		</div>
		<div className="select-items select-hide" ref={fakeOptions}>
		  {optionDivs}
		</div>
	  </div>
	);
  };
  
  export default DropDown;
  