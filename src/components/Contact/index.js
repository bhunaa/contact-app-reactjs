import React, { useState } from "react";
import { connect } from "react-redux";

import { getContact } from "../../state/actions/contact";

import ContactTable from "../form-inputs/ContactTable";
import ContactInput from "../form-inputs/ContactInput";

import "./styles/index.scss";

var storeContacts = [];

function Contact(props) {
	const { getContact, user } = props;
	const [showModal, setShowModal] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [address, setAddress] = useState("");
	const [enableEdit, setEnableEdit] = useState(false);
	const [updateId, setUpdateId] = useState("");
	const [viewContact, setViewContact] = useState([]);
	const [selectedContact, setSelectedContact] = useState("");
	const [showView, setShowView] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		document.getElementById("close").click();

		let data = {
			firstName: firstName,
			lastName: lastName,
			phone: phone,
			email: email,
			company: company,
			address: address,
			id: enableEdit ? updateId : storeContacts.length + 1,
		};
		if (enableEdit) {
			storeContacts = storeContacts.filter((ele) => ele.id !== updateId);
			setEnableEdit(false);
		}
		storeContacts.push(data);
		setFirstName("");
		setLastName("");
		setPhone("");
		setEmail("");
		setCompany("");
		setAddress("");
		setUpdateId("");
		getContact(storeContacts);
	};

	const onEditHandler = (data) => {
		setFirstName(data.firstName);
		setLastName(data.lastName);
		setPhone(data.phone);
		setEmail(data.email);
		setCompany(data.company);
		setAddress(data.address);
		setUpdateId(data.id);
		setShowView(false);
		setSelectedContact("");
		setEnableEdit(true);
	};

	const checkBoxHandler = (e, data) => {
		if (e.target.checked) {
			setSelectedContact(data.id);
			setViewContact(data);
			setShowView(true);
		} else {
			setSelectedContact("");
			setViewContact([]);
			setShowView(false);
		}
	};

	const onClearHandler = () => {
		setFirstName("");
		setLastName("");
		setPhone("");
		setEmail("");
		setCompany("");
		setAddress("");
	};

	return (
		<React.Fragment>
			<div className="container mt-5">
				<div className="panal-wrapper">
					<div className="row">
						<div className="col-md-4">
							<i className="fa fa-address-book" />
							<div className="contact-text-container">
								<div className="contact-text">Contacts</div>
								<div className="contact-subtext">Welcome to Contact page</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<span className="sort-text">Sort by:</span>{" "}
							<span className="filter-text">Date Created</span>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-md">
							<div className="row">
								<div className="col-xl-7">
									<input
										type="text"
										className="contact-search-input mb-3"
										placeholder="Search Name"
									/>
									<i className="fa fa-search" />
								</div>
								<div className="col-xl-5">
									<button
										type="button"
										className="btn btn-secondary"
										data-toggle="modal"
										data-target="#exampleModal"
										onClick={() => setShowModal(!showModal)}
									>
										+ Add Contact
									</button>
								</div>
							</div>
							<div className="list-container mt-5">
								<table className="table table-borderless">
									<thead>
										<tr className="table-dark">
											<th scope="col">
												<div className="plus-btn">
													<span className="plus-icon">+</span>
												</div>
											</th>
											<th scope="col">Basic info</th>
											<th scope="col">Company</th>
										</tr>
									</thead>
									<tbody>
										{user &&
											user.map((data, index) => {
												return (
													<tr
														key={`contact${index}`}
														className={`${
															selectedContact === data.id ? "active-row" : ""
														}`}
													>
														<th scope="row">
															<label className="checkbox-container">
																<input
																	type="checkbox"
																	className="check-box-user"
																	checked={selectedContact === data.id}
																	onClick={(e) => checkBoxHandler(e, data)}
																/>
																<span className="checkmark"></span>
															</label>
														</th>
														<td>
															<div className="form-group row">
																<div className="col-2-md align-font-icon">
																	<div className={"name-circle"}>
																		<span className="view-name-wrapper">
																			<p className="name-text">
																				{(data.firstName + " " + data.lastName)
																					.match(/\b(\w)/g)
																					.join("")}
																			</p>
																		</span>
																	</div>
																</div>

																<div className="col-8-md ml-2 ">
																	<div className="contact-name">
																		{data.firstName} {data.lastName}
																	</div>
																	<div className="contact-email">
																		{data.email}
																		<span
																			className="edit-icon"
																			data-toggle="modal"
																			data-target="#exampleModal"
																			onClick={() => onEditHandler(data)}
																		>
																			<i className="fas fa-edit" />
																		</span>
																	</div>
																</div>
															</div>
														</td>
														<td>
															<div className="contact-office">
																{data.company}
															</div>
														</td>
													</tr>
												);
											})}
									</tbody>
								</table>
							</div>
						</div>
						<div
							className="modal fade"
							id="exampleModal"
							tabIndex="-1"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">
											{enableEdit ? "Update Contact" : "Add Contact"}
										</h5>
										<button
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
											id="close"
											onClick={() => onClearHandler}
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<form onSubmit={handleSubmit}>
											<ContactInput
												label={"First Name"}
												type={"text"}
												value={firstName}
												onChange={(e) => setFirstName(e.target.value.trim())}
												required={enableEdit ? false : true}
											/>
											<ContactInput
												label={"Last Name"}
												type={"text"}
												value={lastName}
												onChange={(e) => setLastName(e.target.value.trim())}
												required={enableEdit ? false : true}
											/>
											<ContactInput
												label={"Email"}
												type={"email"}
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required={enableEdit ? false : true}
											/>
											<ContactInput
												label={"Phone"}
												type={"number"}
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
												required={enableEdit ? false : true}
											/>
											<ContactInput
												label={"Company"}
												type={"text"}
												value={company}
												onChange={(e) => setCompany(e.target.value)}
												required={enableEdit ? false : true}
											/>
											<ContactInput
												label={"Address"}
												type={"text"}
												value={address}
												onChange={(e) => setAddress(e.target.value)}
												required={enableEdit ? false : true}
											/>
											<button type="submit" className="btn btn-primary">
												Save
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md ml-md-5 mt-2">
							<div className="row mt-5">
								{showView ? <ContactTable viewContact={viewContact} /> : ""}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

function mapStateToProps(state) {
	return {
		user: state.contact.user,
	};
}

export default connect(mapStateToProps, {
	getContact,
})(Contact);
