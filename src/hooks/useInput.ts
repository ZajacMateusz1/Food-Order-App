import { useState } from "react";
export default function useInput(validationFn: (value: string) => boolean) {
  const [value, setValue] = useState<string>("");
  const [didEdit, setDidEdit] = useState<boolean>(false);
  function handleInputChange(newInputValue: string) {
    setValue(newInputValue);
    setDidEdit(false);
  }
  function handleOnBlur() {
    setDidEdit(true);
  }
  const error: boolean = didEdit && !validationFn(value);
  return { value, handleInputChange, handleOnBlur, error };
}
