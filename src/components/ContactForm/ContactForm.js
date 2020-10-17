import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledForm } from "./ContactFormStyle";

// TODO: clear form on submit
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
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type="text"
					name="name"
					ref={register}
					onChange={updateInput}
					value={formData.name || ""}
				/>
				<label>Email</label>
				<input
					type="email"
					name="email"
					ref={register({ required: true })}
					onChange={updateInput}
					value={formData.email || ""}
				/>
				<label>Message</label>
				<textarea
					name="message"
					placeholder="I look forward to hearing from you ^_^"
					ref={register}
					onChange={updateInput}
					value={formData.message || ""}
				/>

				<input type="submit" />
			</StyledForm>
		</>
	);
};

export default ContactForm;
