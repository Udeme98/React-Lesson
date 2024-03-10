import { useState } from "react";

const framework = ["react", "vue", "angular", "svetle"];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping">free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleChange}
          />
        </div>

        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            framework
          </label>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
