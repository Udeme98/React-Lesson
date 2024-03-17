import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "Joe" });

  const logout = () => {
    setUser({ ...user, name: null });
  };

  return (
    <div>
      <NavLinks user={user} logout={logout} />
    </div>
  );
};
export default Navbar;
