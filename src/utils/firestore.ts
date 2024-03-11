import {
  addDoc,
  collection,
  CollectionReference,
  getDocs,
  query,
  updateDoc,
  where,
} from '@firebase/firestore';
import { db, storage } from '@root/config/firebase';
import { ITweetData, ITweetResponse, IUserData } from '@root/types/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

import { generateSlug } from './helpers';

export const createUser = async (data: IUserData) => {
  const { userId, name, email, phone, birth } = data;
  const dbref = collection(db, 'Users');

  const userSlugName = generateSlug();
  const matchEmailQuery = query(dbref, where('email', '==', email));

  const snapshot = await getDocs(matchEmailQuery);

  if (!snapshot.empty) {
    return;
  }

  await addDoc(dbref, {
    userId,
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

export const getUserById = async (id: string) => {
  const dbRef = collection(db, 'Users') as CollectionReference<IUserData>;
  const matchSlugQuery = query(dbRef, where('userId', '==', id));

  const snapshot = await getDocs(matchSlugQuery);
  const userData = snapshot.docs.map((doc) => doc.data())[0];

  return userData;
};

export const createTweet = async (data: ITweetData) => {
  const { text, image, userId } = data;
  const dbref = collection(db, 'Tweets');

  let imageUrl = null;

  if (image) {
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    await uploadBytes(imageRef, image);

    imageUrl = await getDownloadURL(imageRef);
  }

  await addDoc(dbref, {
    tweetId: v4(),
    text,
    image: imageUrl,
    userId,
  });
};

export const getTweetsById = async (userId: string) => {
  const dbRef = collection(db, 'Tweets') as CollectionReference<ITweetResponse>;
  const matchIdQuery = query(dbRef, where('userId', '==', userId));

  const snapshot = await getDocs(matchIdQuery);
  const tweetsData = snapshot.docs.map((doc) => doc.data());

  return tweetsData;
};

export const likeTweet = async (tweetId: string, userId: string) => {
  const dbRef = collection(db, 'Tweets');
  const matchTweetQuery = query(dbRef, where('tweetId', '==', tweetId));

  const snapshot = await getDocs(matchTweetQuery);

  if (snapshot.empty) {
    return;
  }

  const tweetDoc = snapshot.docs[0];
  const tweetData = tweetDoc.data();
  let likes = tweetData.likes || [];

  if (likes.includes(userId)) {
    likes = likes.filter((id: string) => id !== userId);
  } else {
    likes.push(userId);
  }

  await updateDoc(tweetDoc.ref, { likes });
};
