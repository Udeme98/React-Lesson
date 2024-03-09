// setup challenge
// 1. setup controlled input (name input)
// 2. setup onSubmit (for now just placeholder)
// 3. import data array (first array) from data
// 4. create another state value (data as default)
// 5. iterate over and display right after form (h4)
// 6. when user submits the form add new person to the list
// Extra:
// Add extra button and setup a functionality to remove user

import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const fakeId = Date.now();
    const updatedUsers = { id: fakeId, name: name };
    setUser([...user, updatedUsers]);

    setName(""); /*clears the input field */
  };

  const remove = (id) => {
    const filId = user.filter((user) => user.id !== id);
    setUser(filId);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h3>users</h3>
      {user.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => remove(user.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
