import React from "react";
import { useForm } from "react-hook-form";
import { StyledForm } from "./ContactFormStyle";


// TODO: clear form on submit
const ContactForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
				<input type="text"  name="Name" ref={register} />
                <label>Email</label>
				<input
					type="email"
					name="email"
					ref={register({ required: true })}
				/>
                <label>Message</label>
				<textarea
					name="message"
					placeholder="I look forward to hearing from you ^_^"
					ref={register}
				/>

				<input type="submit" />
			</StyledForm>
		</>
	);
};

export default ContactForm;