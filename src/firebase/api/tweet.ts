import {
  addDoc,
  collection,
  CollectionReference,
  getDocs,
  query,
  updateDoc,
  where,
} from '@firebase/firestore';
import { db } from '@root/firebase/firebase';
import { ITweetData, ITweetResponse } from '@root/types/firebase';
import { addImageIntoStorage } from '@utils/firestore';
import { v4 } from 'uuid';

const getTweetByValue = async (fieldName: string, value: string) => {
  const dbRef = collection(db, 'Tweets') as CollectionReference<ITweetResponse>;
  const matchValueQuery = query(dbRef, where(fieldName, '==', value));

  const snapshot = await getDocs(matchValueQuery);
  const tweetsData = snapshot.docs.map((doc) => doc.data());

  return tweetsData;
};

export const getTweetsByUserId = async (userId: string) => {
  const tweetsData = await getTweetByValue('userId', userId);

  return tweetsData;
};

export const getTweetById = async (tweetId: string) => {
  const tweetsData = await getTweetByValue('tweetId', tweetId);

  return tweetsData[0];
};

export const getAllTweets = async () => {
  const dbRef = collection(db, 'Tweets');
  const snapshot = await getDocs(dbRef);
  const tweetsData = snapshot.docs.map((doc) => doc.data() as ITweetResponse);

  return tweetsData;
};

export const searchTweetsByText = async (value: string) => {
  if (value === '') {
    return [];
  }
  const dbRef = collection(db, 'Tweets') as CollectionReference<ITweetResponse>;
  const matchValueQuery = query(
    dbRef,
    where('text', '>=', value),
    where('text', '<', value + '\uf8ff'),
  );

  const snapshot = await getDocs(matchValueQuery);
  const tweetsData = snapshot.docs.map((doc) => doc.data());

  return tweetsData;
};

export const createTweet = async (tweetData: ITweetData) => {
  const { text, image, userId } = tweetData;
  const dbref = collection(db, 'Tweets');

  let imageUrl = null;
  if (image) {
    imageUrl = await addImageIntoStorage(image);
  }

  await addDoc(dbref, {
    tweetId: v4(),
    date: Date.now(),
    text,
    image: imageUrl,
    userId,
  });
};

export const likeTweet = async (tweetId: string, userId: string) => {
  const dbRef = collection(db, 'Tweets');
  const matchTweetQuery = query(dbRef, where('tweetId', '==', tweetId));
  const snapshot = await getDocs(matchTweetQuery);

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
