import React, { useContext } from "react";
import UserContext from "./context/UserContext";

export default function SwitchButton() {
  let user = useContext(UserContext);
  return (
    <button
      className={`btn ${user.isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={user.changeMode}
    >
      {user.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
