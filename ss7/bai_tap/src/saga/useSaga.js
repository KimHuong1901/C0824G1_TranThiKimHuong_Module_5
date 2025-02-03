import axios from "axios";
import {call, put, takeLatest} from "redux-saga/effects";
import {
    DELETE_USER, GET_USER
} from "../redux/action";
const BaseURL = "https://jsonplaceholder.typicode.com/users"
function* getUser(action){
    try{
        const response = yield axios.get(BaseURL);
        yield put({type: GET_USER, payload: response.data})
    }catch(error){
        console.log("error when get user" + error);
    }
}
function* deleteUser(action){
    try{
        const response = yield call(axios.delete, `${BaseURL}/${action.payload}`);
        yield put({type: DELETE_USER, payload: response.data})
    } catch (error){
        console.log("error when delete user" + error);
    }
}
export default function* rootSaga(){
    yield takeLatest("GET_USER", getUser);
    yield takeLatest("DELETE_USER", deleteUser);
};