import { InputModeOptions } from "react-native";
import { Input } from "tamagui";

interface Props {
  handleChange: (name: string) => any;
  handleBlur: (name: string) => any;
  name: string;
  value: string;
  type?: InputModeOptions;
  placeholder?: string;
}

export default function GothamField({
  handleChange,
  handleBlur,
  name,
  value,
  type = "text",
  placeholder = "",
}: Props) {
  return (
    <Input
      inputMode={type}
      placeholder={placeholder}
      onChange={handleChange(name)}
      onBlur={handleBlur(name)}
      value={value}
    />
  );
}
