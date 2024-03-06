// set-up challenge
// a. import useState and useEffect
// b. setup state value( users -- default value ([]))
// c. set up useEffect(Make sure it runs only on Initial render)
// * in the cb, create a function which performs fetch functionality
//   - use the url started in the starter file
//   - use the .then or async
//   - set user equal to result
//   - iterate over the list and display image,username and link

import { useState, useEffect } from "react";

const UseEffectChallenge = () => {
  const [users, setUsers] = useState([]);

  const url = "https://api.github.com/users";

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>useEffect Challenge - Fetch Data</h3>
      <h4>Github Users</h4>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UseEffectChallenge;
