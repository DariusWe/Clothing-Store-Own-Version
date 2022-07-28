import "./input-field.scss";

const InputField = ({label, id, type}) => {
  return (
    <div className="group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} />
    </div>
  );
};

export default InputField;
