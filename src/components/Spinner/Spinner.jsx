import React from "react";
import "./spinner.css";

const Spinner = ({ color }) => {
	return (
		<div>
			<div className="lds-roller ">
				{Array.from({ length: 8 }).map((arr, i) => (
					<div key={i} className={`${color}`}></div>
				))}
			</div>
		</div>
	);
};

export default Spinner;
