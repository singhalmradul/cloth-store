import { useState } from 'react';
import {
	signInAuthWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultDetails = {
	email: '',
	password: '',
};

const SignUpForm = () => {
	const [details, setDetails] = useState(defaultDetails);
	const { email, password } = details;

	const onChange = event => {
		const { name, value } = event.target;
		setDetails({ ...details, [name]: value });
	};

	const onSubmit = async event => {
		event.preventDefault();
		try {
			await signInAuthWithEmailAndPassword(email, password);
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('wrong password');
					break;
				case 'auth/user-not-found':
					alert('email not registered, please sign up');
					break;
				default:
					console.log('error!!', error);
			}
		}
		setDetails(defaultDetails);
	};

	const googleSignIn = async () => {
		try {
			await signInWithGooglePopup();
		} catch (error) {
			if ((error.code = 'auth/popup-closed-by-user'))
				alert('popup closed by user');
			else console.log('error!!', error);
		}
	};

	return (
		<div className='sign-in-form-container'>
			<h2>already signed up? sign in</h2>
			<form onSubmit={onSubmit}>
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
				<div className='sign-in-buttons'>
					<Button type='submit'>sign in</Button>
					<Button
						type='button'
						buttonType='google'
						onClick={googleSignIn}
					>
						google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
