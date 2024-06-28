//import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmp from "./components/AddEmp";
import AllEmp from "./components/AllEmp";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddEmp />} />
          <Route path="/all" element={<AllEmp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
