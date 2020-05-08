import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDi0H2-gMwcI8vpFFRU_OU4KRsZPgmAkzc",
    authDomain: "kawahara-react.firebaseapp.com",
    databaseURL: "https://kawahara-react.firebaseio.com",
    projectId: "kawahara-react",
    storageBucket: "kawahara-react.appspot.com",
    messagingSenderId: "416403774767",
    appId: "1:416403774767:web:5ba10cbe35bc35b1fdd5da",
    measurementId: "G-X2GJJFC1CL"
};

let fireapp;
try {
    fireapp = firebase.initializeApp(config);
} catch (error) {
    console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
    login:false,
    username:'(click here!)',
    email:'',
    data: [],
    items:[]
}

// レデューサー
function fireReduser(state = initial, action) {
    switch (action.type) {
        case 'UPDATE_USER':
            return action.value;
        default:
            return state;
    }
}

export function initStore(state = initial) {
    return createStore(fireReduser, state,
        applyMiddleware(thunkMiddleware))
}