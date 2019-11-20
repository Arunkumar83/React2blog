import React from "react";

function Login() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="login-username"> Username: </label>
      <input type="text" id="login-username" name="login-username" />
      <label htmlFor="login-password"> Password: </label>
      <input type="password" id="login-password" name="login-password" />
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;
