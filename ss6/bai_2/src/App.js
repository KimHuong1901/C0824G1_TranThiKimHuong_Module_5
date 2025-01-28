import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SnackbarProvider} from "notistack";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookList from './component/Book.js';
import BookCreate from "./component/Create.js";
import UpdateBook from "./component/Update.js";
function App() {
  return (
      <SnackbarProvider maxSnack={3} autoHideDuration={3001}>
        <BrowserRouter>
          <Routes>
            <Route path="book" element={<BookList/>}></Route>
              <Route path="book/create" element={<BookCreate/>}></Route>
              <Route path="book/:id/update" element={<UpdateBook/>}></Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
  );
}

export default App;
