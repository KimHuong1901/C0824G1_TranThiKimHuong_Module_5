
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Router} from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Login/>}/>
          <Route path="/users" element={<User/>}/>
        </Router>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
