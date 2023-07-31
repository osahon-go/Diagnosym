import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    list_of_symptoms: [],
    time_of_diagnosis: null
}

const SymptomSlice = createSlice({
    name: "user_symptoms",
    initialState: INITIAL_STATE, 
    reducers: {
        set_user_Symptoms: (state, {payload}) => {
            state.list_of_symptoms = payload
        },
        set_diagnosis_time: (state, {payload}) => {
            state.time_of_diagnosis = payload
        },
        unset_user_symptoms: () => INITIAL_STATE
    }
})

export const { set_user_Symptoms, set_diagnosis_time, unset_user_symptoms } = SymptomSlice.actions

export default SymptomSlice.reducer