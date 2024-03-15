import { useState } from "react";

const PersonalCus = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Personal Cus</h2>
      {show && <h4>Hello world</h4>}

      <button className="btn" onClick={() => setShow(!show)}>
        Toggle
      </button>
    </div>
  );
};
export default PersonalCus;
