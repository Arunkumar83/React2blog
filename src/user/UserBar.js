import React from "react";
import Logout from "./Logout";
import Login from "./Login";
import Register from "./Register";

function UserBar() {
  const user = "";
  if (user) {
    return <Logout user={user} />;
  } else {
    return (
      <React.Fragment>
        <Login />
        <Register />
      </React.Fragment>
    );
  }
}

export default UserBar;
