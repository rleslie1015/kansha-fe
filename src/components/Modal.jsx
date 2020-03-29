import React, { useRef, useEffect, Children, cloneElement } from 'react';

const Modal = ({ close, children }) => {
	const modal = useRef(null);

	useEffect(() => {
		(function fadeIn() {
			if (!modal.current) return null;
			let val = parseFloat(modal.current.style.opacity);
			if (!((val += 0.1) > 1)) {
				modal.current.style.opacity = val;
				requestAnimationFrame(fadeIn);
			}
		})();
	}, [modal]);

	const closeModal = () => {
		modal.current.style.opacity = 1;
		(function fadeOut() {
			if ((modal.current.style.opacity -= 0.1) < 0) {
				close(false);
			} else {
				requestAnimationFrame(fadeOut);
			}
		})();
	};

	const mappedChildren = Children.map(children, child => {
		return cloneElement(child, { close: close });
	});

	return (
		<div className="modal" ref={modal} style={{ opacity: 0 }}>
			<div role="presentation" onClick={closeModal} />
			<section>
				<button
					type="button"
					className="modal-close"
					onClick={closeModal}>
					&#9587;
				</button>
				{mappedChildren}
			</section>
		</div>
	);
};

export default Modal;
