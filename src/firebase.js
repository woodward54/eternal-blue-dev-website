// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBtDQT5SwnzfWpfoGbNZPOTNmvcH958TiM',
  authDomain: 'eternal-blue-dev.firebaseapp.com',
  projectId: 'eternal-blue-dev',
  storageBucket: 'eternal-blue-dev.appspot.com',
  messagingSenderId: '1080105307756',
  appId: '1:1080105307756:web:28806de219a37061c65249',
  measurementId: 'G-0232R9EXDQ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
