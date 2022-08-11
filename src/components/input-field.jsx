import "./input-field.scss";
import { useState } from "react";

const InputField = ({label, id, type}) => {
  const [fieldValue, setFieldValue] = useState("");

  return (
    <div className="group">
      <input type={type} id={id} name={id} onChange={(e) => setFieldValue(e.target.value)} />
      <label htmlFor={id} className={fieldValue.length > 0 ? "shrink" : ""}>{label}</label>
    </div>
  );
};

export default InputField;
