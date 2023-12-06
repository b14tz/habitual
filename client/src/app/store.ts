import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import userReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: userReducer,
    devTools: import.meta.env.VITE_NODE_ENV !== "production",
    middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;
