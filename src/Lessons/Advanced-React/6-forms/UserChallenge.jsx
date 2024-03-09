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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("button submit");
  };

  return (
    <div>
      <form className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" />
        </div>

        <button type="submit" onClick={onSubmit} className="btn btn-block">
          submit
        </button>
      </form>
      {user.map((user) => {
        return <h4 key={user.id}>{user.name}</h4>;
      })}
    </div>
  );
};
export default UserChallenge;
