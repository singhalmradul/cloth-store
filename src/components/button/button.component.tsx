import { ButtonHTMLAttributes, FC } from 'react';
import {
	BaseButton,
	ButtonSpinner,
	GoogleSignInButton,
	InvertedButton,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
	base = 'base-button',
	google = 'google-sign-in',
	inverted = 'inverted',
}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType]);

type ButtonProps = {
	isLoading?: boolean;
	buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
	children,
	isLoading,
	buttonType = BUTTON_TYPE_CLASSES.base,
	...otherProps
}) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};
export default Button;
