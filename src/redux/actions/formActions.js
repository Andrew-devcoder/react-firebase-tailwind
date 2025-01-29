import { validate } from '../../utils/validation';
import { updateField, resetForm, updateError } from '../slices/formSlice';
import { store } from '../store';

export const updateFormField = (name, value) => {
	store.dispatch(updateField({ fieldName: name, value }));

	const state = store.getState().form.formData;
	const formData = { ...state, [name]: value };

	if (name === 'password' && formData.confirmPassword != '')
		store.dispatch(updateField({ fieldName: 'confirmPassword', value: '' }));

	const error = name == 'confirmPassword' ? validate.matchPasswords(formData.password, value) : validate[name](value);

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

	// const handleSubmit = async (user) => {
	// 	const newUserUid = await registrationUser(user.email, user.password);
	// 	const dataNewUser = await saveUserData(newUserUid, user)
	// 	console.log(dataNewUser)

	// 	if (dataNewUser) {
	// 		navigate('/login', { replace: true });
	// 	}
	// };

	// try {
	// 	console.log('Form data submitted:', formData);
	// 	resetFormFields();
	// } catch (error) {
	// 	console.error('Error submitting form:', error);
	// }
};
