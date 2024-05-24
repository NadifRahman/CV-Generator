import formstyles from "./styles/form-basis.module.css";
//ADD updateInfo functioanlity after completing rest of code
export function PersonalInfoForm({ isEnabled, updateInfo }) {
  return (
    <form className={formstyles.formcontainer}>
      <div className={formstyles.formtitle}>Personal Info</div>
      <div className={`${formstyles.formsection}`}>
        <label htmlFor="name" className="name">
          Name:
        </label>
        {isEnabled ? (
          <input type="text" id="name" className={`${formstyles.typeinput}`} />
        ) : (
          <input type="text" id="name" className={`${formstyles.typeinput}`} disabled />
        )}
      </div>
      <div className={`${formstyles.formsection}`}>
        <label htmlFor="email">Email:</label>
        {isEnabled ? (
          <input type="email" id="email" className={`${formstyles.typeinput}`} />
        ) : (
          <input type="email" id="email" className={`${formstyles.typeinput}`} disabled />
        )}
      </div>
      <div className={`${formstyles.formsection}`}>
        <label htmlFor="telephone">Phone Number:</label>
        {isEnabled ? (
          <input type="tel" id="telephone" className={`${formstyles.typeinput}`} />
        ) : (
          <input type="tel" id="telephone" className={`${formstyles.typeinput}`} disabled />
        )}
      </div>
    </form>
  );
}
