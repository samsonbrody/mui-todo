import { useState } from "react";

function useToggle(initialVal) {
  const [val, setVal] = useState(initialVal);
  const handleToggle = () => {
    setVal(!val);
  };
  return [val, handleToggle];
}
export default useToggle;
