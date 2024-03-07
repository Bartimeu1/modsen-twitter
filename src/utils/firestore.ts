import { addDoc, collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '@root/config/firebase';
import { IUserData } from '@root/types/firebase';

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
