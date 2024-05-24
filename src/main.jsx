import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PersonalInfoForm } from "./PersonalInfoForm.jsx";
import { EducationInfoForm } from "./EducationalInfoForm.jsx";
import { PracticalInfoForm } from "./PracticalInfoForm.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { CV } from "./CV.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
