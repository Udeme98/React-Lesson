import { usePersonalCus2 } from "./usePersonalCus2";

const PersonalCus = () => {
  const [show, toggle] = usePersonalCus2(false);

  return (
    <div>
      <h2>Personal Cus</h2>

      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <h4>Hello world</h4>}
    </div>
  );
};
export default PersonalCus;
