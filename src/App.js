import { Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Q1/Login";
import Insert_data from "./page/Q2/Insert_data";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/insert_data" element={<Insert_data />} />
    </Routes>
  );
}

export default App;
