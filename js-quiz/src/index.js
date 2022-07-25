import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import Docs from "./Docs";
import { Navbar, Nav, Container } from "react-bootstrap";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar className="py-0" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/">JavaScript Quiz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link to="/Docs" as={Link}>
              Docs
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path={"/"} element={<App />}></Route>
        <Route path={"/docs"} element={<Docs />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
