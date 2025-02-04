import axios from "axios";
import { put, takeLatest} from "redux-saga/effects";
import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN
} from "../redux/action";
const BaseURL = "https://jsonplaceholder.typicode.com/users"
function* getUser(action){
    try{
        const response = yield axios.get(BaseURL);
        yield put({type: FETCH_USER_SUCCESS, payload: response.data});
    }catch (error){
        console.log("error get user " + error)
    }
}
function* authSagaFun(action){
    const user = action.payload;
    if(user.username === "admin" && user.password === "letmein"){
        yield put ({type: LOGIN_SUCCESS, payload: user});
        yield put({type: FETCH_USER, payload: {}});
    }
}
export default function* rootSaga(){
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
}