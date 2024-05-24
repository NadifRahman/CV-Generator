import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar } from "./Sidebar";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { EducationInfoForm } from "./EducationalInfoForm";
import { PracticalInfoForm } from "./PracticalInfoForm";
import { CV } from "./CV";
function App() {
  return (
    <>
      <Sidebar>
        <PersonalInfoForm isEnabled={false}></PersonalInfoForm>
        <EducationInfoForm isEnabled={false}></EducationInfoForm>
        <PracticalInfoForm isEnabled={false}></PracticalInfoForm>
      </Sidebar>
      <CV></CV>
    </>
  );
}

export default App;
