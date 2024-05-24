import formstyles from "./styles/form-basis.module.css";
//ADD updateInfo functioanlity after completing rest of code
export function PracticalInfoForm({ isEnabled, updateInfo }) {
  return (
    <form className={formstyles.formcontainer}>
      <div className={formstyles.formtitle}>Practical Experience</div>
      <div className={`${formstyles.formsection}`}>
        <label htmlFor="company-name" className="company-name">
          Company Name:
        </label>
        {isEnabled ? (
          <input
            type="text"
            id="company-name"
            className={`${formstyles.typeinput}`}
          />
        ) : (
          <input
            type="text"
            id="company-name"
            className={`${formstyles.typeinput}`}
            disabled
          />
        )}
      </div>
      <div className={`${formstyles.formsection}`}>
        <label htmlFor="position">Position:</label>
        {isEnabled ? (
          <input
            type="text"
            id="position"
            className={`${formstyles.typeinput}`}
          />
        ) : (
          <input
            type="text"
            id="position"
            className={`${formstyles.typeinput}`}
            disabled
          />
        )}
      </div>
      <div className={`${formstyles.formsection}`}>
        <label htmlFor="date">Join Date:</label>
        {isEnabled ? (
          <input type="date" id="date" className={`${formstyles.typeinput}`} />
        ) : (
          <input
            type="date"
            id="date"
            className={`${formstyles.typeinput}`}
            disabled
          />
        )}
      </div>
    </form>
  );
}
