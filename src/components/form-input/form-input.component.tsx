import { InputHTMLAttributes } from 'react';
import { FromInputLabel, Group, Input } from './form-input.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;
const FormInput = ({ label, ...attr }: FormInputProps) => (
	<Group>
		<Input {...attr} />
		{label && (
			<FromInputLabel
				shrink={
					attr && typeof attr.value === 'string' && Boolean(attr.value.length)
				}
			>
				{label}
			</FromInputLabel>
		)}
	</Group>
);
export default FormInput;
