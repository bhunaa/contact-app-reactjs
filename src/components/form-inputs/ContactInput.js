import React from "react";

const ContactInput = (props) => {
	return (
		<div className="form-group">
			<label htmlFor="recipient-name" className="col-form-label">
				{props.label}
			</label>
			<input
				type={props.type}
				className="form-control"
				value={props.value}
				onChange={props.onChange}
				required={props.enableEdit ? false : true}
			/>
		</div>
	);
};

export default ContactInput;
