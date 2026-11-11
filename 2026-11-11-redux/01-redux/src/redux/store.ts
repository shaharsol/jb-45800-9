import { configureStore } from "@reduxjs/toolkit";
import followingSlice from './following-slice'

const store = configureStore({
    reducer: {
       followingSlice 
    }
})

export default store

// let the react know the types of the various slices states for select purposes
export type RootState = ReturnType<typeof store.getState>

// let the react know the actions that can be dispatched
export type AppDispatch = typeof store.dispatch