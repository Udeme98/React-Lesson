import { useState } from "react";

const MultipleInputs = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    setUsers({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Controlled Inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={users.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={users.email}
            onChange={handleChange}
          />
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
            value={users.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
