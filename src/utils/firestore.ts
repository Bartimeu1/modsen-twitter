import {
  addDoc,
  collection,
  CollectionReference,
  getDocs,
  query,
  where,
} from '@firebase/firestore';
import { db, storage } from '@root/config/firebase';
import { ITweetData,IUserData } from '@root/types/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

import { generateSlug } from './helpers';

export const createUser = async (data: IUserData) => {
  const { name, email, phone, birth } = data;
  const dbref = collection(db, 'Users');

  const userSlugName = generateSlug();
  const matchEmailQuery = query(dbref, where('email', '==', email));

  const snapshot = await getDocs(matchEmailQuery);

  if (!snapshot.empty) {
    return;
  }

  await addDoc(dbref, {
    name: name,
    slug: userSlugName,
    email: email,
    phone: phone || null,
    birth: birth || null,
  });
};

export const getUserByEmail = async (email: string) => {
  const dbRef = collection(db, 'Users');
  const matchSlugQuery = query(dbRef, where('email', '==', email));

  const snapshot = await getDocs(matchSlugQuery);
  const userData = snapshot.docs.map((doc) => doc.data())[0];

  return userData;
};

export const getUserBySlug = async (slug: string) => {
  const dbRef = collection(db, 'Users') as CollectionReference<IUserData>;
  const matchSlugQuery = query(dbRef, where('slug', '==', slug));

  const snapshot = await getDocs(matchSlugQuery);
  const userData = snapshot.docs.map((doc) => doc.data())[0];

  return userData;
};

export const createTweet = async (data: ITweetData) => {
  const { text, image } = data;
  const dbref = collection(db, 'Tweets');

  let imageUrl = null;

  if (image) {
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    await uploadBytes(imageRef, image);

    imageUrl = await getDownloadURL(imageRef);
  }

  await addDoc(dbref, {
    text,
    image: imageUrl,
  });
};
