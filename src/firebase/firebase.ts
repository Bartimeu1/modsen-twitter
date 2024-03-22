import {
  connectAuthEmulator,
  getAuth,
  GoogleAuthProvider,
} from '@firebase/auth';
import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';

import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

export const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
firebase.firestore().settings({
  experimentalForceLongPolling: true,
});

export const db = firebase.firestore(app);

export const storage = getStorage(app);

if (window.Cypress) {
  db.settings({
    merge: true,
    experimentalForceLongPolling: true,
  });
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  db.useEmulator('127.0.0.1', 8080);
}
