
import './App.css';
import ContactForm from "./component/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SnackbarProvider} from "notistack";
function App() {
  return (
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <BrowserRouter>
          <Routes>
              <Route path="contact" element={<ContactForm/>}></Route>
          </Routes>
         </BrowserRouter>
      </SnackbarProvider>
  );
}

export default App;
