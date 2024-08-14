import { configureStore } from "@reduxjs/toolkit";

import PostSlice from "../features/posts/PostSlice";
import usersSlice from "../features/users/usersSlice";
export const store = configureStore({
    reducer: {
       posts:PostSlice,
       users:usersSlice
    }
})