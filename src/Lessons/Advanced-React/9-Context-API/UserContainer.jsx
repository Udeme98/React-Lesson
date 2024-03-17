const UserContainer = ({ user, logout }) => {
  return (
    <div>
      <h3>Context API</h3>
      <h4>{user.name}</h4>
      <button className="btn" onClick={logout}>
        Toggle
      </button>
    </div>
  );
};
export default UserContainer;
