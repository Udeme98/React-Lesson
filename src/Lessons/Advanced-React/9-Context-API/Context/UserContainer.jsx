const UserContainer = () => {
  return "Hello World";
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
