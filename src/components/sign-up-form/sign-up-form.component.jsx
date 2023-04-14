import { useState } from 'react';
import {
	createUserDocumentWithAuth,
	signUpUserUsingEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';

const defaultDetails = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};
const SignUpForm = () => {
	const [details, setDetails] = useState(defaultDetails);
	const { displayName, email, password, confirmPassword } = details;
	const onChange = event => {
		const { name, value } = event.target;
		setDetails({ ...details, [name]: value });
	};
	const createUserDocWithAuth = async signedUpUser => {
		await createUserDocumentWithAuth(signedUpUser, {
			displayName,
		});
	};
	const onSubmit = async event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('password not match');
			return;
		}
		try {
			const { user } = await signUpUserUsingEmailAndPassword(email, password);
			await createUserDocWithAuth(user);
			console.log(user);
		} catch (error) {
			if (error.code === 'auth/email-already-in-use')
				alert('unable to sign up: email already in use');
			console.log('error', error);
		}
		setDetails(defaultDetails);
	};
	return (
		<div className='sign-up-form-container'>
			<h2>new here? wanna sign up</h2>
			<form onSubmit={onSubmit}>
				<FormInput
					label='diplay name'
					type='text'
					name='displayName'
					value={displayName}
					onChange={onChange}
					required
				/>
				<FormInput
					label='email'
					type='email'
					name='email'
					value={email}
					onChange={onChange}
					required
				/>
				<FormInput
					label='password'
					type='password'
					name='password'
					value={password}
					onChange={onChange}
					required
				/>
				<FormInput
					label='confirm password'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={onChange}
					required
				/>
				<Button type='submit'>sign up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
