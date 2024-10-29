import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Auth/Signin";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Signin />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
