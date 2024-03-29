import useFetch from "./useFetch";

const url = "https://api.github.com/users/QuincyLarson";

const FetchData = () => {
  const { isLoading, isError, data: user } = useFetch(url);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>There was an error...</h3>;
  }

  const { avatar_url, name, company, bio } = user;

  return (
    <div>
      <h3>Custom hooks: Fetch Data</h3>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default FetchData;
