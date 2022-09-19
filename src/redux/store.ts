import thunk from 'redux-thunk'
import { configureStore, Dispatch } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

import logger from 'redux-logger'

import rootReducer from './slices'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['home', 'filters'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger, thunk],
})
export const dispatchStore = store.dispatch as
    | typeof store.dispatch
    | Dispatch<any>
export const persistor = persistStore(store)

// export default store