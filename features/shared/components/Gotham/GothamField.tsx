import { ErrorMessage, useFormikContext } from "formik";
import { InputModeOptions } from "react-native";
import { Input, Label, Text, View } from "tamagui";

interface Props {
  name: string;
  label?: string;
  type?: InputModeOptions;
  placeholder?: string;
  secureText?: boolean;
}

export default function GothamField({
  name,
  label,
  type = "text",
  placeholder = "",
  secureText = false,
}: Props) {
  const { handleChange, handleBlur, values } = useFormikContext<any>();
  return (
    <View>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        inputMode={type}
        placeholder={placeholder}
        secureTextEntry={secureText}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <Text mt="$2" mb="$2" color="red">
            {msg}
          </Text>
        )}
      />
    </View>
  );
}
