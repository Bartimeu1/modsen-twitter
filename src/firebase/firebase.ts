import {
  connectAuthEmulator,
  getAuth,
  GoogleAuthProvider,
} from '@firebase/auth';
import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';

import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || 'mock',
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || 'mock',
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || 'mock',
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || 'mock',
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'mock',
  appId: process.env.VITE_FIREBASE_APP_ID || 'mock',
};

const app = firebase.initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

const auth = getAuth(app);
export const db = firebase.firestore(app);

firebase.firestore().settings({
  experimentalForceLongPolling: true,
});

export const storage = getStorage(app);

if (window.Cypress) {
  db.settings({
    merge: true,
    experimentalForceLongPolling: true,
  });
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  db.useEmulator('127.0.0.1', 8080);
}
