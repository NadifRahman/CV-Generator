import { useState } from "react";

import "./App.css";
import { Sidebar } from "./Sidebar";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { EducationInfoForm } from "./EducationalInfoForm";
import { PracticalInfoForm } from "./PracticalInfoForm";
import { CV } from "./CV";
function App() {
  const [enabled, setEnabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <Sidebar>
        <PersonalInfoForm
          isEnabled={enabled}
          updateName={setName}
          updateEmail={setEmail}
          updatePhone={setPhone}
        ></PersonalInfoForm>
        <EducationInfoForm isEnabled={enabled}></EducationInfoForm>
        <PracticalInfoForm isEnabled={enabled}></PracticalInfoForm>
        <button onClick={() => setEnabled(!enabled)}>Edit</button>
      </Sidebar>
      <CV name={name} email={email} phone={phone}></CV>
    </>
  );
}

export default App;
