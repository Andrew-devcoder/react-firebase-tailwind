import { signInUser } from '../../firebase/services/authService';
import { setUser } from '../slices/userSlice';
import { store } from '../store';

export const loginUser = async (email, password) => {
	try {
		const userData = await signInUser(email, password);
		console.log(userData);
		store.dispatch(setUser(userData));
		console.log('Вхід успішний:', userData);
	} catch (error) {
		console.error('Помилка входу:', error.message);
		throw error;
	}
};
