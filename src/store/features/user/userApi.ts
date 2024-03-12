import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { db } from '@root/config/firebase';
import { IChangeUserData, IUserData } from '@root/types/firebase';
import { addImageIntoStorage, getUserByValue } from '@utils/firestore';
import { generateSlug } from '@utils/helpers';
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getUserById: builder.query<IUserData, { userId: string }>({
      queryFn: async (credentials) => {
        try {
          const userData = await getUserByValue('userId', credentials.userId);

          return { data: userData };
        } catch (error) {
          return { error };
        }
      },
    }),
    getUserByEmail: builder.query<IUserData, { email: string }>({
      queryFn: async (credentials) => {
        try {
          const userData = await getUserByValue('email', credentials.email);

          return { data: userData };
        } catch (error) {
          return { error };
        }
      },
    }),
    getUserBySlug: builder.query<IUserData, { slug: string }>({
      queryFn: async (credentials) => {
        try {
          const userData = await getUserByValue('slug', credentials.slug);

          return { data: userData };
        } catch (error) {
          return { error };
        }
      },
    }),
    createUser: builder.mutation<null, { data: IUserData }>({
      queryFn: async (credentials) => {
        try {
          const { userId, name, email, phone, birth } = credentials.data;
          const dbref = collection(db, 'Users');

          const userSlugName = generateSlug();
          const matchEmailQuery = query(dbref, where('email', '==', email));

          const snapshot = await getDocs(matchEmailQuery);

          if (!snapshot.empty) {
            return { data: null };
          }

          await addDoc(dbref, {
            userId,
            name: name,
            slug: userSlugName,
            email: email,
            phone: phone || null,
            birth: birth || null,
          });

          return { data: null };
        } catch (error) {
          return { error };
        }
      },
    }),
    updateUserData: builder.mutation<
      null,
      { data: IChangeUserData; userId: string }
    >({
      queryFn: async (credentials) => {
        const { email, name, bio, slug, avatar } = credentials.data;
        try {
          const dbRef = collection(db, 'Users');
          const matchIdQuery = query(
            dbRef,
            where('userId', '==', credentials.userId),
          );
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

          return { data: null };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const {
  useGetUserByEmailQuery,
  useGetUserByIdQuery,
  useGetUserBySlugQuery,
  useCreateUserMutation,
  useUpdateUserDataMutation,
} = userApi;
