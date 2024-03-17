import UserContainer from "./UserContainer";

const NavLinks = ({ user, logout }) => {
  return (
    <div>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};
export default NavLinks;
