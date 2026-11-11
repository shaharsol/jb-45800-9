import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type User from "../models/User";

// describe the data inside this slice
interface FollowingState {
    following: User[]
}

// initial state, how redux treats the data before anyone dispatch anything to it
const initialState: FollowingState = {
    following: []
}

const followingSlice = createSlice({
    name: 'following',
    initialState,
    reducers: {
        // each reducer is actually an action
        // whereas an action is implemented as a callback function
        // the reducer callback will always get two params: previous state
        // and the dispatch payload. 
        // the task of the reducer is to create a new state from the two params
        // hence the name reduce
        // hence the framework name redux
        populate: (state, action: PayloadAction<User[]>) => {
            state.following = action.payload
        },
        follow: (state, action: PayloadAction<User>) => {
            console.log(`following ${action.payload.name}`)
            state.following.push(action.payload)
        },
        unfollow: (state, action: PayloadAction<{id: string}>) => {
            state.following = state.following.filter(f => f.id !== action.payload.id)
        }
    }
})

export const { populate, follow, unfollow } = followingSlice.actions 

export default followingSlice.reducer