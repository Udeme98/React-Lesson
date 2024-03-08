// setup challenge:
// 1. look at the people array in data.js
// 2. create List.jsx component
// 3. in List.jsx import and iterate over people (name)
//   - just render name
// 4. set up Person.jsx component
//   - render name, nickname, image

import { people } from "../../../data";

const List = () => {
  return (
    <div>
      <h3>List</h3>
      {people.map((people) => {
        const { id, name } = people;
        return <h4 key={id}>{name}</h4>;
      })}
    </div>
  );
};
export default List;
