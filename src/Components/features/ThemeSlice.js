import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    themeConfig: {
        name: "light",
        bg: "#fff",
        txt: "#000"
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
        sepiaMode: (state, payload) => {

        },
        defaultMode: () => INITIAL_STATE
    }
})

export const { darkMode, sepiaMode, defaultMode} = ThemeSlice.actions

export default ThemeSlice.reducer