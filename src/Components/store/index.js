import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'

import ResultReducer from '../features/ResultSlice'
import UserReducer from "../features/UserSlice";
import ThemeReducer from "../features/ThemeSlice"

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    user: UserReducer,
    result: ResultReducer,
    themes: ThemeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)