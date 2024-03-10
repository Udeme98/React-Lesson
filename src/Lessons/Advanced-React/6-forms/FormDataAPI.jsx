import { useState } from "react";

const FormDataAPI = () => {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // console.log(formData);
    // const email = formData.get("email");
    // console.log(email);
    const newUser = Object.fromEntries(formData); //convert an array to an object, with name/value pairs
    console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default FormDataAPI;
