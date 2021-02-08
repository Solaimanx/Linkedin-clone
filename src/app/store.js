import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: UserReducer,
  },
});
