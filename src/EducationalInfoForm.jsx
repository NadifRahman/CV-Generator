import formstyles from "./styles/form-basis.module.css";
export function EducationInfoForm({ isEnabled, updateInfo }) {
  return (
    <form className={formstyles.formcontainer}>
      <div className={formstyles.formtitle}>Educational Info</div>
      <div className={`${formstyles.formsection}`}>
        <label htmlFor="school" className="school">
          School:
        </label>
        {isEnabled ? (
          <input
            type="text"
            id="school"
            className={`${formstyles.typeinput}`}
          />
        ) : (
          <input
            type="text"
            id="school"
            className={`${formstyles.typeinput}`}
            disabled
          />
        )}
      </div>
      <div className={`${formstyles.formsection}`}>
        <label htmlFor="program">Program:</label>
        {isEnabled ? (
          <input
            type="text"
            id="program"
            className={`${formstyles.typeinput}`}
          />
        ) : (
          <input
            type="text"
            id="program"
            className={`${formstyles.typeinput}`}
            disabled
          />
        )}
      </div>
      <div className={`${formstyles.formsection}`}>
        <label htmlFor="date">Graduation Date:</label>
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
