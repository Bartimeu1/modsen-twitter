import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  createTweet,
  getAllTweets,
  getTweetById,
  getTweetsByUserId,
  likeTweet,
  searchTweetsByText,
} from '@root/firebase/api/tweet';
import { ITweetData, ITweetResponse } from '@root/types/firebase';

export const tweetApi = createApi({
  reducerPath: 'tweetApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Tweet'],
  endpoints: (builder) => ({
    getTweetsByUserId: builder.query<ITweetResponse[], { userId: string }>({
      queryFn: async ({ userId }) => {
        try {
          const tweetsData = await getTweetsByUserId(userId);

          return { data: tweetsData };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Tweet'],
    }),
    getTweetById: builder.query<ITweetResponse, { tweetId: string }>({
      queryFn: async ({ tweetId }) => {
        try {
          const tweetsData = await getTweetById(tweetId);

          return { data: tweetsData };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Tweet'],
    }),
    getAllTweets: builder.query<ITweetResponse[], object>({
      queryFn: async () => {
        try {
          const tweetsData = await getAllTweets();

          return { data: tweetsData };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Tweet'],
    }),
    createTweet: builder.mutation<null, { data: ITweetData }>({
      queryFn: async ({ data }) => {
        try {
          await createTweet(data);

          return { data: null };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Tweet'],
    }),
    searchTweetsByText: builder.query<ITweetResponse[], { value: string }>({
      queryFn: async ({ value }) => {
        try {
          const tweetsData = await searchTweetsByText(value);

          return { data: tweetsData };
        } catch (error) {
          return { error };
        }
      },
    }),
    likeTweet: builder.mutation<null, { tweetId: string; userId: string }>({
      queryFn: async ({ tweetId, userId }) => {
        try {
          await likeTweet(tweetId, userId);

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
  useLazySearchTweetsByTextQuery,
  useLikeTweetMutation,
} = tweetApi;
