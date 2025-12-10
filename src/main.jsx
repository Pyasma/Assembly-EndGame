import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "../components/Header.jsx";
import { Status } from "../components/Status.jsx";
import { MainBody } from "../components/MainBody.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Status />
    <MainBody />
    {/*<GuessGame />*/}
    {/*<InputsAss />*/}
  </>,
);
