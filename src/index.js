import React from "react";
import ReactDOM from "react-dom/client";
import {Peliculas} from "./Pelis";
import { computeHeadingLevel } from "@testing-library/react";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<>
    <Peliculas/>
    
</>);

