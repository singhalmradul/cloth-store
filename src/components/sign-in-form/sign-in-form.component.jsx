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
			const userDocRef = await signInAuthWithEmailAndPassword(email, password);
			console.log(userDocRef);
		} catch (error) {
			console.log('error!!', error);
		}
		setDetails(defaultDetails);
	};
	const googleSignIn = async () => {
		try {
			const userDocRef = await signInWithGooglePopup();
			console.log(userDocRef);
		} catch (error) {
			console.log('error!!', error);
		}
	};
	return (
		<div className='sign-in-form-container'>
			<h2>alreay signed up?sign in</h2>
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
