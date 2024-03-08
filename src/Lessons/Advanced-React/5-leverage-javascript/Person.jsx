import { people } from "../../../data";

const Person = () => {
  return (
    <div>
      <h3>Person</h3>
      {people.map((people) => {
        return (
          <div key={people.id}>
            <h4>
              Name:
              {people.name}
            </h4>
            <h4>{people.nickName && people.nickName}</h4>
            {people.images && (
              <img
                src={people.images[0].small.url}
                style={{ width: "200px" }}
                alt="image"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Person;
