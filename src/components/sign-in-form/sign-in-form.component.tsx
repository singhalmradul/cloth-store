import { ChangeEvent, FormEvent, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { SignInButtons, SignInFormContainer } from './sign-in-form.styles';
import { useDispatch } from 'react-redux';
import {
	emailSignInStart,
	googleSignInStart,
} from '../../store/user/user.action';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultDetails = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [details, setDetails] = useState(defaultDetails);
	const { email, password } = details;
	const dispatch = useDispatch();

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDetails({ ...details, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			dispatch(emailSignInStart(email, password));
		} catch (error) {
			switch ((error as AuthError).code) {
				case AuthErrorCodes.INVALID_PASSWORD:
					alert('wrong password');
					break;
				case AuthErrorCodes.INVALID_EMAIL:
					alert('email not registered, please sign up');
					break;
				default:
					console.log('error!!', error);
			}
		}
		setDetails(defaultDetails);
	};

	const googleSignIn = () => {
		try {
			dispatch(googleSignInStart());
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.POPUP_CLOSED_BY_USER)
				alert('popup closed by user');
			else console.log('error!!', error);
		}
	};

	return (
		<SignInFormContainer>
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
				<SignInButtons>
					<Button type='submit'>sign in</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={googleSignIn}
					>
						google sign in
					</Button>
				</SignInButtons>
			</form>
		</SignInFormContainer>
	);
};

export default SignInForm;
