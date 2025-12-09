import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Header } from "/components/Header.jsx";
import { Status } from "/components/Status.jsx";
import { MainBody } from "/components/MainBody.jsx";
import { InputsAss } from "/components/InputsAss.jsx";
import { Key } from "/components/Keys.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Status />
    <MainBody />
    <InputsAss />
    <Key />
  </>,
);
