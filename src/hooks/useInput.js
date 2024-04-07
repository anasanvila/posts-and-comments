import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("value=", value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
