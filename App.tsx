import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MyStack from '@navigation/root'
import { persistor, store } from '@redux'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="MyStack" component={MyStack} />
                    </Stack.Navigator>
                </PersistGate>
            </Provider>
        </NavigationContainer>
    )
}
