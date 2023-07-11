import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    result: 'No diagnosis'
}

const Resultslice = createSlice({
    name: 'diagnosis',
    initialState: INITIAL_STATE,
    reducers: {
        setDiagnosis : (state, {payload}) =>{
            state.result = payload
        },
        resetResult: () => INITIAL_STATE
    }
})

export const { setDiagnosis, resetResult } = Resultslice.actions

export default Resultslice.reducer 