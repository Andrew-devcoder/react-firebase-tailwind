import { validate } from '../../utils/validation';
import { updateField, resetForm, updateError } from '../slices/formSlice';
import { store } from '../store';

export const updateFormField = (name, value) => {
	store.dispatch(updateField({ fieldName: name, value }));

	const state = store.getState();
	const formData = { ...state.form.formData, [name]: value };

	if (name === 'password') {
		const passwordError = validate.password(value);
		updateFormError(name, passwordError);
	}

	const passwordMatchError = validate.matchPasswords(formData.password, formData.confirmPassword);
	updateFormError('confirmPassword', passwordMatchError);
};

export const resetFormFields = () => {
	store.dispatch(resetForm());
};

export const updateFormError = (name, error) => {
	store.dispatch(updateError({ fieldName: name, error }));
};

export const submitForm = async () => {
	const state = store.getState();
	const formData = state.form.formData;

	try {
		console.log('Form data submitted:', formData);
		resetFormFields();
	} catch (error) {
		console.error('Error submitting form:', error);
	}
};
