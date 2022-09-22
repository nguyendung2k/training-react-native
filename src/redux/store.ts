import thunk from 'redux-thunk'
import { configureStore, Dispatch } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

import logger from 'redux-logger'

import rootReducer from './slices'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['filters'],
    whitelist: ['home', 'auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [
        // logger,
        thunk,
    ],
})

export const persistor = persistStore(store)
