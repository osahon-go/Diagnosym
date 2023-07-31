import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    themeConfig: {
        name: "light",
        bg: "#fff",
        txt: "#000",
        heightStatus: null,
        screenHeight: null
    }
}

const ThemeSlice = createSlice({
    name: "theme",
    initialState: INITIAL_STATE,
    reducers: {
        darkMode : (state, payload) => {
            state.themeConfig.name = "dark"
            state.themeConfig.bg = "#000"
            state.themeConfig.txt = "#fff"
        },
        setHeightStatus : (state, {payload}) => {
            state.themeConfig.heightStatus = payload
        },
        setScreenHeight : (state, {payload}) => {
            state.screenHeight = payload
        },
        sepiaMode: (state, payload) => {

        },
        defaultMode: () => INITIAL_STATE
    }
})

export const { darkMode, setHeightStatus, setScreenHeight, sepiaMode, defaultMode} = ThemeSlice.actions

export default ThemeSlice.reducer