import React from "react";

function Register() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="register-username"> Username: </label>
      <input type="text" id="register-username" name="register-username" />
      <label htmlFor="register-password"> Password: </label>
      <input type="password" id="register-password" name="register-password" />
      <label htmlFor="register-repeat-password"> Repeat Password: </label>
      <input
        type="password"
        id="register-repeat-password"
        name="register-repeat-password"
      />
      <input type="submit" value="Register" />
    </form>
  );
}

export default Register;
