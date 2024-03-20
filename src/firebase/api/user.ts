import { db } from '@root/firebase/firebase';
import { IChangeUserData, IUserData } from '@root/types/firebase';
import { addImageIntoStorage } from '@utils/firestore';
import { generateSlug } from '@utils/helpers';
import {
  addDoc,
  collection,
  CollectionReference,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

const getUserByValue = async (fieldName: string, value: string) => {
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

export const getUserById = async (userId: string) => {
  const userData = await getUserByValue('userId', userId);

  return userData;
};

export const getUserBySlug = async (slug: string) => {
  const userData = await getUserByValue('slug', slug);

  return userData;
};

export const createUser = async (userData: IUserData) => {
  const { userId, name, email, phone, birth } = userData;
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

export const updateUserData = async (data: IChangeUserData, userId: string) => {
  const { email, name, bio, slug, avatar } = data;

  const dbRef = collection(db, 'Users');
  const matchIdQuery = query(dbRef, where('userId', '==', userId));
  const snapshot = await getDocs(matchIdQuery);

  let imageUrl = null;
  if (avatar) {
    imageUrl = await addImageIntoStorage(avatar);
  }

  const userDoc = snapshot.docs[0];
  const userData = userDoc.data();

  await updateDoc(userDoc.ref, {
    ...userData,
    email,
    name,
    bio: bio || null,
    slug,
    avatar: imageUrl || userData.avatar || null,
  });
};

export const searchUsersByName = async (value: string) => {
  if (!value) {
    return [];
  }

  const dbRef = collection(db, 'Users') as CollectionReference<IUserData>;
  const matchValueQuery = query(
    dbRef,
    where('name', '>=', value),
    where('name', '<', value + '\uf8ff'),
  );

  const snapshot = await getDocs(matchValueQuery);
  const usersData = snapshot.docs.map((doc) => doc.data());

  return usersData;
};
