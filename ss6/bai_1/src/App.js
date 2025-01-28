
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SnackbarProvider} from "notistack";
import ToDoList from "./component/ToDoList";

function App() {
  return (
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <BrowserRouter>
          <Routes>
            <Route path="list" element={<ToDoList/>}></Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
  );
}

export default App;
