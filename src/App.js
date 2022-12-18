import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/developer" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
