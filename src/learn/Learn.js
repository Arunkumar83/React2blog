import React from "react";

const UserGreeting = props => {
  return <h1> Welcome back {props.user}!</h1>;
};

const GuestGreeting = props => <h1> Welcome Guest!</h1>;

const Greeting = props => {
  if (props.isLoggedIn) return <UserGreeting user={props.name} />;
  else return <GuestGreeting />;
};

function LoginButton(props) {
  console.log("rendering login ..");
  return <button onClick={props.onClick}>Login</button>;
}

const LogoutButton = props => {
  return <button onClick={props.onClick}>Logout</button>;
};

//export default Greeting;

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    console.log("login clicked ...");
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log("In render " + isLoggedIn);
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLoginClick} />;
    } else {
      button = <LoginButton onClick={this.handleLogoutClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
