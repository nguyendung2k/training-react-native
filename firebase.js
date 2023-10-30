import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyB_f-lYIumwuBUU5d_0doOefw8eAuufhuk',
    authDomain: 'react-native-v1-5f783.firebaseapp.com',
    projectId: 'react-native-v1-5f783',
    storageBucket: 'react-native-v1-5f783.appspot.com',
    messagingSenderId: '740702791616',
    appId: '1:740702791616:web:971fd0f5394d7a98e44a25',
    measurementId: 'G-9MRBPRLSW3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
