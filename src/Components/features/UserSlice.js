import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    fullname: "",
    age: 0,
    location: "",
    gender: ""
}

const UserSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setUserDetails: (state, {payload}) => {
            state.fullname = payload.name
            state.age = payload.age
            state.location = payload.location
            state.gender = payload.gender
        },
        resetUser: () => INITIAL_STATE
    }
})

export const { setUserDetails, resetUser } = UserSlice.actions

export default UserSlice.reducer