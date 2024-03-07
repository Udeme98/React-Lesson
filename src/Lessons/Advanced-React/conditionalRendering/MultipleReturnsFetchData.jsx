// setup challenge:
// 1. practice on setting up state values and data fetching
// 2. create state variable
//   - user (default value 'null')
// 3. fetch data from the url (just console the result)

import { useEffect, useState } from "react";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  const url = "https://api.github.com/users/QuincyLarson";

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    };
    fetchUser();
  }, []);

  return <div>Multiple Returns Fetch Data</div>;
};
export default MultipleReturnsFetchData;
