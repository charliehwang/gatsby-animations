import React from "react";
import { createPortal } from "react-dom";
import { useSpring, animated, config, to, height } from 'react-spring'

const Portal = ({ onClose, children }) => {
	console.log("createPortal");
	const fadeAnim = useSpring({
		// loop: { reverse: true },
		config: config.stiff,
		from: { opacity: 0 },
		to: { opacity: 0.7 },
		delay: 25
	})
	const animStyle = useSpring({
		// loop: { reverse: true },
		config: { mass: 1, tension: 300, friction: 30 },
		from: { transform: 'scale(0)' },
		to: { transform: 'scale(1)' },
		delay: 25
	})

	return createPortal(
		<>
			<animated.div id="modal-shadow" onClick={() => onClose()} className="fixed h-full w-full left-0 top-0 bg-black opacity-70 z-10" style={{ ...fadeAnim }}>
			</animated.div>
			<animated.div id="modal" className="rounded bg-white fixed z-20 inset-x-4 h-4/5 top-4" style={{ ...animStyle }}>
				<button
					onClick={() => {
						onClose();
					}}
					className="embla__button__close"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						viewBox="0 0 640 480"
					>
						<g>
							<path d="M371.52 241.5l151.3-149.7c13.8-13.6 13.9-35.7.3-49.5-13.6-13.8-35.8-13.9-49.5-.3l-151.5 149.9-149.3-149.7c-13.7-13.7-35.8-13.8-49.5-.1-13.7 13.6-13.7 35.8-.1 49.5l149 149.5-150.2 148.7c-13.8 13.6-13.9 35.7-.3 49.5 6.9 6.9 15.9 10.4 24.9 10.4 8.9 0 17.8-3.4 24.6-10.1l150.5-148.8L473.42 443c6.8 6.9 15.8 10.3 24.8 10.3s17.9-3.4 24.7-10.2c13.7-13.7 13.7-35.8.1-49.5l-151.5-152.1z" />
						</g>
					</svg>
				</button>
				{children}
			</animated.div>
		</>,
		document.getElementById("portal")
		// document.createElement('DIV')
	);
};

export default Portal;
