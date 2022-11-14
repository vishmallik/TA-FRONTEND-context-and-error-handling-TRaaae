import { useContext } from "react";
import UserContext from "./context/UserContext";

function Title({ text }) {
  let user = useContext(UserContext);
  return (
    <h2
      className={`heading ${
        user.isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
