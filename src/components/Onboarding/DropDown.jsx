import React, { useEffect, useRef, useState, Children } from 'react';

const DropDown = ({
	children,
	setSelection,
	id,
	placeholder,
	classNombre,
	defaultValue,
}) => {
	const select = useRef(null);
	const fakeSelect = useRef(null);
	const fakeOptions = useRef(null);

	const optionClick = e => {
		const s = select.current;
		const h = fakeSelect.current;
		for (let i = 0; i < s.length; i++) {
			if (s.options[i].innerHTML === e.target.innerHTML) {
				s.selectedIndex = i;
				s.value = e.target.dataset.value;
				setSelection(e.target.dataset.value);
				setCurrent(e.target.innerHTML);
				const y = e.target.parentNode.getElementsByClassName(
					'same-as-selected',
				);
				for (let k = 0; k < y.length; k++) {
					y[k].removeAttribute('class');
				}
				e.target.setAttribute('class', 'same-as-selected');
				break;
			}
		}
		h.click();
	};

	const selectClick = e => {
		e.stopPropagation();
		fakeOptions.current.classList.toggle('select-hide');
		if (e.target.classList.contains('placeholder-div')) {
			fakeSelect.current.classList.add('select-arrow-active');
		}
		e.target.classList.toggle('select-arrow-active');
	};

	const [current, setCurrent] = useState(
		<div className="placeholder-div" onClick={selectClick}>
			{placeholder}
		</div>,
	);

	useEffect(() => {
		const closeAllSelect = elmnt => {
			if (!elmnt.target.classList.contains('select-arrow-active')) {
				fakeOptions.current.classList.add('select-hide');
				fakeSelect.current.classList.remove('select-arrow-active');
			}
		};
		document.addEventListener('click', closeAllSelect);
		return () => {
			document.removeEventListener('click', closeAllSelect);
		};
	}, []);

	const optionDivs = Children.map(children, option => {
		return (
			<div onClick={optionClick} data-value={option.props.value}>
				{option.props.children}
			</div>
		);
	});

	return (
		<div className={classNombre}>
			<select ref={select}>{children}</select>
			<div
				id={id}
				className="select-selected"
				ref={fakeSelect}
				onClick={selectClick}>
				{current}
			</div>
			<div className="select-items select-hide" ref={fakeOptions}>
				{optionDivs}
			</div>
		</div>
	);
};

export default DropDown;
