import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import UserContext from "./UserContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Alex",
        id: 1,
        isAdmin: false,
        logout: this.logout
      }
    };
  }

  logout = () => {
    const user = { ...this.state.user, name: "" };
    this.setState({ user });
  };

  render = () => (
    <UserContext.Provider value={this.state.user}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
    </UserContext.Provider>
  );
}

render(<App />, document.getElementById("root"));
