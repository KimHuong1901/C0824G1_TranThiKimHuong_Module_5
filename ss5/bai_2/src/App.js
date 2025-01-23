import logo from './logo.svg';
import './App.css';
import FormInformation from "./component/FormInformation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SnackbarProvider} from "notistack";

function App() {
  return (
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <BrowserRouter>
          <Routes>
            <Route path="information" element={<FormInformation/>}></Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
  );
}

export default App;
