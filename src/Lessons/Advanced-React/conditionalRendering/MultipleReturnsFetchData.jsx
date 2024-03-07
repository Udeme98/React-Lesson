// setup challenge:
// 1. practice on setting up state values and data fetching
// 2. create state variable
//   - user (default value 'null')
// 3. fetch data from the url (just console the result)

import { useEffect, useState } from "react";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  const url = "https://api.github.com/users/QuincyLarson";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>There was an error...</h3>;
  }

  const { avatar_url, name, company, bio } = user;

  return (
    <div>
      {/* <h2>Multiple Returns Fetch Data</h2>
      <h3>Data Fetching</h3>
      <h4>Usually 3 options:</h4>
      <ul>
        <li>i. loading - waiting for data to arrive (display loading state)</li>
        <li>ii. error - there was an error (display error message)</li>
        <li>iii. success - received data (display data)</li>
      </ul> */}
      <img
        src={avatar_url}
        alt={name}
        style={{ borderRadius: "25px", width: "150px" }}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
