import CVstyle from "./styles/CV.module.css";
export function CV({ name, email, phone }) {
  return (
    <div className={`${CVstyle.documentContainer} documentContainer`}>
      Name: {name}
      Email: {email}
      Phone: {phone}
    </div>
  );
}
