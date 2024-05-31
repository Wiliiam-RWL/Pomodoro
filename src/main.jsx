import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./assets/theme.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainApplication from "./Pages/MainApplication.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainApplication />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
