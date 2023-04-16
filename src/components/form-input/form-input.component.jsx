import { FromInputLabel, Group, Input } from './form-input.styles';

const FormInput = ({ label, ...attr }) => (
	<Group>
		<Input {...attr} />
		{label && (
			<FromInputLabel shrink={attr.value.length}>{label}</FromInputLabel>
		)}
	</Group>
);
export default FormInput;
