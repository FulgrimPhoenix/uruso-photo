import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  return {
    values,
    onChange: (e) => {
      console.log(e);
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    setValues,
  };
};