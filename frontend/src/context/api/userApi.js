import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["User"],
    }),
    deleteUsers: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    getProfile: build.query({
      query: () => ({
        url: "/profile",
      }),
      providesTags: ["Profile"],
    }),
    signIn: build.mutation({
      query: (body) => ({
        url: "/users/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User", "Profile"],
    }),
    registerUser: build.mutation({
      query: (body) => ({
        url: "/users/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updateUsers: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetProfileQuery,
  useRegisterUserMutation,
  useSignInMutation,
  useDeleteUsersMutation,
  useUpdateUsersMutation,
} = userApi;
