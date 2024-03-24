import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  createUser,
  getUserById,
  getUserBySlug,
  searchUsersByName,
  updateUserData,
} from '@root/firebase/api/user';
import { IChangeUserData, IUserData } from '@root/types/firebase';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUserById: builder.query<IUserData, { userId: string }>({
      queryFn: async (credentials) => {
        try {
          const userData = await getUserById(credentials.userId);

          return { data: userData };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['User'],
    }),
    getUserBySlug: builder.query<IUserData, { slug: string }>({
      queryFn: async (credentials) => {
        try {
          const userData = await getUserBySlug(credentials.slug);

          return { data: userData };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['User'],
    }),
    searchUsersByName: builder.query<IUserData[], { value: string }>({
      queryFn: async (credentials) => {
        try {
          const users = await searchUsersByName(credentials.value);

          return { data: users };
        } catch (error) {
          return { error };
        }
      },
    }),
    createUser: builder.mutation<null, { data: IUserData }>({
      queryFn: async ({ data }) => {
        try {
          createUser(data);

          return { data: null };
        } catch (error) {
          return { error };
        }
      },
    }),
    updateUserData: builder.mutation<
      IUserData,
      { data: IChangeUserData; userId: string }
    >({
      queryFn: async ({ data, userId }) => {
        try {
          const newUserData = await updateUserData(data, userId);

          return { data: newUserData };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useGetUserBySlugQuery,
  useLazySearchUsersByNameQuery,
  useCreateUserMutation,
  useUpdateUserDataMutation,
} = userApi;
