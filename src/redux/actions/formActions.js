import { validate } from '../../utils/validation';
import { updateField, resetForm, updateError } from '../slices/formSlice';
import { store } from '../store';

export const updateFormField = (name, value) => {
	store.dispatch(updateField({ fieldName: name, value }));

	const state = store.getState().form.formData;
	const formData = { ...state, [name]: value };

	const error = name == 'confirmPassword' ? validate.matchPasswords(formData.password, value) : validate[name](value);

	console.log('Dispatching updateError:', { fieldName: name, error });

	store.dispatch(updateError({ fieldName: name, error }));
};

export const resetFormFields = () => {
	store.dispatch(resetForm());
};

export const submitForm = async () => {
	const state = store.getState().form.formData;

	console.log(validate.password(state.password));
	// validate.password(state.password);

	console.log(state);
	console.log(validate.matchPasswords(state.password, state.confirmPassword));

	// try {
	// 	console.log('Form data submitted:', formData);
	// 	resetFormFields();
	// } catch (error) {
	// 	console.error('Error submitting form:', error);
	// }
};
