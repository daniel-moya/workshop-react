import { StrictMode } from "react";
import {render} from "react-dom";
import App from "./Components/App";
import './styles/styles.scss';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
