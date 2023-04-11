import './form-input.styles.scss';
const FormInput = ({ label, ...attr }) => (
	<div className='group'>
		<input
			{...attr}
			className='form-input'
		/>
		{label && (
			<label
				className={`form-input-label ${attr.value.length ? 'shrink' : ''}`}
			>
				{label}
			</label>
		)}
	</div>
);
export default FormInput;
