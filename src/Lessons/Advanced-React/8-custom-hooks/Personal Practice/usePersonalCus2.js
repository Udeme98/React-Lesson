import { useState } from "react";

export const usePersonalCus2 = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow(!show);
  };
  return [show, toggle];
};
