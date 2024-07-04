import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  return {
    values,
    onChange: (e) => {
      console.log(values);
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    setValues,
  };
};