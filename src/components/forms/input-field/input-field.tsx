import { Group, Label, Input } from "./input-field.styles";
import { useState } from "react"

type Props = {
  label: string,
  id: string,
  type: string,
}

const InputField: React.FC<Props> = ({label, id, type }) => {
  const [value, setValue] = useState("");
  
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <Group>
      <Input type={type} id={id} name={id} onChange={changeHandler} />
      <Label htmlFor={id} $isActive={value.length > 0}>{label}</Label>
    </Group>
  );
};

export default InputField;
