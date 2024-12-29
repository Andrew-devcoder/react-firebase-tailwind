import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config';

export const saveUserData = async (uid, user) => {
	try {
		await setDoc(doc(db, 'users', uid), {
			uid: uid,
			name: user.name,
			email: user.email,
		});
		console.log('User data saved successfully.');
	} catch (error) {
		console.error('Error saving user data:', error);
		throw error;
	}
};
