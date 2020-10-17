import React, { useState } from "react";
import * as FirestoreService from "../../firebase/firestore";
import { useForm } from "react-hook-form";
import { StyledForm } from "./ContactFormStyle";

const ContactForm = () => {
	const { register } = useForm();
	const [formData, setFormData] = useState({});

	const updateInput = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		createMessage();
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	const createMessage = (e) => {
		// e.preventDefault();
		const contactName = document.contactForm.contactName.value;
		const contactEmail = document.contactForm.contactEmail.value;
		const contactMessage = document.contactForm.contactMessage.value;

		FirestoreService.createMessage(contactName, contactEmail, contactMessage)
			.then(console.log("right after firestore service"))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<StyledForm name="contactForm" onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type="text"
					name="contactName"
					ref={register}
					onChange={updateInput}
					value={formData.contactName || ""}
				/>
				<label>Email</label>
				<input
					type="email"
					name="contactEmail"
					ref={register({ required: true })}
					onChange={updateInput}
					value={formData.contactEmail || ""}
				/>
				<label>Message</label>
				<textarea
					name="contactMessage"
					placeholder="I look forward to hearing from you ^_^"
					ref={register}
					onChange={updateInput}
					value={formData.contactMessage || ""}
				/>

				<input type="submit" />
			</StyledForm>
		</>
	);
};

export default ContactForm;
