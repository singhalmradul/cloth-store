import { ChangeEvent, FormEvent, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { SignUpFormContainer } from './sign-up-form.styles';
import { signUpStart } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultDetails = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};
const SignUpForm = () => {
	const [details, setDetails] = useState(defaultDetails);
	const { displayName, email, password, confirmPassword } = details;
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDetails({ ...details, [name]: value });
	};
	const dispatch = useDispatch();
	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('password not match');
			return;
		}
		try {
			dispatch(signUpStart(email, password, displayName));
		} catch (error) {
			switch ((error as AuthError).code) {
				case AuthErrorCodes.EMAIL_EXISTS:
					alert('unable to sign up: email already in use');
					break;
				case AuthErrorCodes.WEAK_PASSWORD:
					alert('password should be atleast 6 characters');
					break;
				default:
					console.log('error', error);
			}
		}
		setDetails(defaultDetails);
	};
	return (
		<SignUpFormContainer>
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
		</SignUpFormContainer>
	);
};

export default SignUpForm;
