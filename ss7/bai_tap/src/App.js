import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user)

  useEffect(() => {
    dispatch(users.getAllUsers())
  }, [dispatch])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users" element={<List/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
