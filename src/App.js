import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PhoneForm } from "./BadUi.jsx";

function App() {
    return (
        <div className="App">
            <link
                href="https://fonts.googleapis.com/css?family=Major+Mono+Display|Roboto&display=swap"
                rel="stylesheet"
            ></link>
            <PhoneForm />
        </div>
    );
}

export default App;
