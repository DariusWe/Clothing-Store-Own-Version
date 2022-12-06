import { Group, Label, Inpuut } from "./input-field.styles";
import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<Props> = ({ label, id, ...htmlProps }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Group>
      <Inpuut id={id} name={id} onChange={changeHandler} {...htmlProps} />
      <Label htmlFor={id} $isActive={value.length > 0}>
        {label}
      </Label>
    </Group>
  );
};

export default InputField;
