import React from "react";
import UserContext from "./UserContext";

export default ({ name }) => (
  <React.Fragment>
    <h1>Hello {name}!</h1>
    <h2>
      Value from context:
      <UserContext.Consumer>{user => user}</UserContext.Consumer>
    </h2>
  </React.Fragment>
);
