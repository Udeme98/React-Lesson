// setup challenge:
// 1. create user value
//  - user (default value 'null')
// 2. create two functions
//  - login: set's user equal to object with name property
//  - logout: set's user equal to null
// 3. in JSX use ? to display two different setups

// h4 with 'hello there, user name' and logout button
// h4 with 'please login' and login button

import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "sam" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2>User Challenge</h2>
      {user ? (
        <div>
          <h4>Hello there, {user.name}!</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
