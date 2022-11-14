import { useContext } from "react";
import UserContext from "./context/UserContext";

function Header() {
  let user = useContext(UserContext);
  return (
    <h1
      className={`heading ${
        user.isDarkMode ? "heading-dark" : "heading-light"
      }`}
    >
      {user.isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
