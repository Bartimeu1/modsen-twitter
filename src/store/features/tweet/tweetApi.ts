import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { db } from '@root/config/firebase';
import { ITweetData, ITweetResponse } from '@root/types/firebase';
import { addImageIntoStorage, getTweetByValue } from '@utils/firestore';
import {
  addDoc,
  collection,
  CollectionReference,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { v4 } from 'uuid';

export const tweetApi = createApi({
  reducerPath: 'tweetApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Tweet'],
  endpoints: (builder) => ({
    getTweetsByUserId: builder.query<ITweetResponse[], { userId: string }>({
      queryFn: async (credentials) => {
        try {
          const tweetsData = await getTweetByValue(
            'userId',
            credentials.userId,
          );

          return { data: tweetsData };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Tweet'],
    }),
    getTweetById: builder.query<ITweetResponse, { tweetId: string }>({
      queryFn: async (credentials) => {
        try {
          const tweetsData = await getTweetByValue(
            'tweetId',
            credentials.tweetId,
          );

          return { data: tweetsData[0] };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Tweet'],
    }),
    getAllTweets: builder.query<ITweetResponse[], object>({
      queryFn: async () => {
        try {
          const dbRef = collection(db, 'Tweets');

          const snapshot = await getDocs(dbRef);
          const tweetsData: ITweetResponse[] = snapshot.docs.map(
            (doc) => doc.data() as ITweetResponse,
          );

          return { data: tweetsData };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Tweet'],
    }),
    createTweet: builder.mutation<null, { data: ITweetData }>({
      queryFn: async (credentials) => {
        try {
          const { text, image, userId } = credentials.data;
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

          return { data: null };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Tweet'],
    }),
    searchTweetsByText: builder.query<ITweetResponse[], { value: string }>({
      queryFn: async (credentials) => {
        try {
          if (credentials.value === '') {
            return { data: [] };
          }
          const dbRef = collection(
            db,
            'Tweets',
          ) as CollectionReference<ITweetResponse>;
          const matchValueQuery = query(
            dbRef,
            where('text', '>=', credentials.value),
            where('text', '<', credentials.value + '\uf8ff'),
          );

          const snapshot = await getDocs(matchValueQuery);
          const tweetsData = snapshot.docs.map((doc) => doc.data());

          return { data: tweetsData };
        } catch (error) {
          return { error };
        }
      },
    }),
    likeTweet: builder.mutation<null, { tweetId: string; userId: string }>({
      queryFn: async (credentials) => {
        try {
          const { tweetId, userId } = credentials;
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

          return { data: null };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Tweet'],
    }),
  }),
});

export const {
  useCreateTweetMutation,
  useGetAllTweetsQuery,
  useGetTweetsByUserIdQuery,
  useGetTweetByIdQuery,
  useSearchTweetsByTextQuery,
  useLikeTweetMutation,
} = tweetApi;
