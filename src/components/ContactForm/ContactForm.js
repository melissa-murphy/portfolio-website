import React, { useState } from "react";
import { Axios, db } from "../../firebase/firebaseConfig";
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
		sendEmail();
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	const sendEmail = () => {
		Axios.post(
			// "http://localhost:5001/mm-dev-portfolio/us-central1/submit", 
			"https://us-central1-mm-dev-portfolio.cloudfunctions.net/submit",
			formData
		)
			.then((res) => {
				console.log(res);
				db.collection("emails").add({
					name: formData.name,
					email: formData.email,
					message: formData.message,
					time: new Date(),
				});
			})
			.catch((error) => {
				console.log(error);
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
