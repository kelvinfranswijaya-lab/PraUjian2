import React from "react";
import ReactDOM from "react-dom/client";

// bootstrap dari npm, bukan cdn
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./style.css";

import App from "./app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);