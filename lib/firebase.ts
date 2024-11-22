import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAJY8soPOfMW9mX0D6yuoZcRG82RJRwZrM',
	authDomain: 'webskills-7fdcb.firebaseapp.com',
	projectId: 'webskills-7fdcb',
	storageBucket: 'webskills-7fdcb.firebasestorage.app',
	messagingSenderId: '62083446337',
	appId: '1:62083446337:web:2d46aa1c30987193db78c0',
	measurementId: 'G-7QE8P98YYR',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
