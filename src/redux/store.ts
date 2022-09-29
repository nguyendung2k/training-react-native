import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import logger from 'redux-logger'
import rootReducer from './slices'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['filters', 'forum'],
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

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
