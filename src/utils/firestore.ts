import {
  collection,
  CollectionReference,
  getDocs,
  query,
  where,
} from '@firebase/firestore';
import { db, storage } from '@root/config/firebase';
import { ITweetResponse, IUserData } from '@root/types/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

export const getUserByValue = async (fieldName: string, value: string) => {
  const dbRef = collection(db, 'Users') as CollectionReference<IUserData>;
  const matchValueQuery = query(dbRef, where(fieldName, '==', value));

  const snapshot = await getDocs(matchValueQuery);
  const userData = snapshot.docs.map((doc) => doc.data())[0];

  if (userData) {
    return userData;
  } else {
    throw new Error('User not found');
  }
};

export const getTweetByValue = async (fieldName: string, value: string) => {
  const dbRef = collection(db, 'Tweets') as CollectionReference<ITweetResponse>;
  const matchValueQuery = query(dbRef, where(fieldName, '==', value));

  const snapshot = await getDocs(matchValueQuery);
  const tweetsData = snapshot.docs.map((doc) => doc.data());

  return tweetsData;
};

export const addImageIntoStorage = async (image: File) => {
  const imageRef = ref(storage, `images/${image.name + v4()}`);
  await uploadBytes(imageRef, image);

  return getDownloadURL(imageRef);
};
