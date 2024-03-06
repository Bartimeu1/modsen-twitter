import { addDoc, collection, getDocs,query, where } from '@firebase/firestore';
import { db } from '@root/config/firebase';
import { IUserData } from '@root/types/firebase';

export const createUser = async (data: IUserData) => {
  const { name, email, phone, birth } = data;
  const dbref = collection(db, 'Users');

  const matchEmailQuery = query(dbref, where('Email', '==', email));

  const snapshot = await getDocs(matchEmailQuery);

  if (!snapshot.empty) {
    return;
  }

  await addDoc(dbref, {
    Name: name,
    Email: email,
    Phone: phone || null,
    Birth: birth || null,
  });
};
