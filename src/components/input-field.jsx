import { Group, Label, Input } from "./input-field.styles";
import { useState } from "react";

const InputField = ({label, id, type}) => {
  console.log("Render/Rerender of InputField");
  const [fieldValue, setFieldValue] = useState("");

  return (
    <Group>
      <Input type={type} id={id} name={id} onChange={(e) => setFieldValue(e.target.value)} />
      <Label htmlFor={id} isActive={fieldValue.length > 0 ? true : false}>{label}</Label>
    </Group>
  );
};

export default InputField;
