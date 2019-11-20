import React from "react";

function Logout({ user }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      Logged-in as : {user}
      <input type="submit" value="Logout" />
    </form>
  );
}

export default Logout;
