import React from "react";

import "./styles/index.scss";

const ContactTable = (props) => {
	return (
		<div className="contact-view mt-5">
			<div className="center-container mt-5">
				<div className="view-circle">
					<span className="view-name-wrapper">
						<p className="view-name-text">
							{(props.viewContact.firstName + " " + props.viewContact.lastName)
								.match(/\b(\w)/g)
								.join("")}
						</p>
					</span>
				</div>
				<div className="view-name-container mt-3">
					<div className="view-name">
						{props.viewContact.firstName} {props.viewContact.lastName}
					</div>
					<div className="view-company">{props.viewContact.company}</div>
				</div>
				<div className="view-table mt-5">
					<div className="table-responsive-md">
						<table className="table">
							<thead>
								<tr>
									<td className="border-none">Full name</td>
									<th scope="col" className="text-capitalize">
										{props.viewContact.firstName} &nbsp;
										{props.viewContact.lastName}
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Email</td>
									<th scope="row">{props.viewContact.email}</th>
								</tr>
								<tr>
									<td>Phone</td>
									<th scope="row">{props.viewContact.phone}</th>
								</tr>
								<tr>
									<td>Company</td>
									<th scope="row" className="text-capitalize">
										{props.viewContact.company}
									</th>
								</tr>
								<tr>
									<td>Address</td>
									<th scope="row" className="text-capitalize">
										{props.viewContact.address}
									</th>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactTable;
