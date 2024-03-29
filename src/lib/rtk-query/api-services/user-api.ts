import { RequestArgs, User, apiSlice } from "@farakav-challenge/lib";

// Note: User endpoints are defined here
const userApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], RequestArgs>({
      query: (arg) => ({
        url: "/usersData",
        method: "GET",
        params: arg.params,
      }),
      providesTags: ["users"],
    }),
    getUser: build.query<User, { id: string }>({
      query: (arg) => ({
        url: `/usersData/${arg.id}`,
        method: "GET",
      }),
    }),
    addUser: build.mutation<unknown, User>({
      query: (arg) => ({
        url: "/usersData",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["users"],
    }),
    modifyUser: build.mutation<unknown, User>({
      query: (arg) => ({
        url: `/usersData/${arg.id}`,
        method: "PUT",
        body: arg,
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: build.mutation<unknown, { id: string }>({
      query: (arg) => ({
        url: `/usersData/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useGetUsersQuery,
  useLazyGetUserQuery,
  useLazyGetUsersQuery,
  useModifyUserMutation,
} = userApi;
