import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import "./styles/tokens.css";
import "./styles/site.css";

const Stub = ({ name }) => <h1>{name}</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Stub name="Work" />} />
          <Route path="contact" element={<Stub name="Contact" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
