import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';

export const signInUser = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		return { email: userCredential.user.email, uid: userCredential.user.uid };
	} catch (error) {
		throw new Error(error.message);
	}
};
