import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "../states/stateSlice";

export type IRootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        blogSlice: blogReducer,
        // Add other reducers here if needed
    },
});

export type AppDispatch = typeof store.dispatch;

export default store;
