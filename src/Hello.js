import React from "react";
import UserContext from "./UserContext";

export default ({ name }) => (
  <React.Fragment>
    <h1>Hello {name}!</h1>
    <h2>
      Value from context:
      <UserContext.Consumer>
        {user => (
          <div>
            {user.name} is {user.isAdmin ? "" : "not"} an admin
            <button style={{ margin: "1em" }} onClick={user.logout}>
              Logout
            </button>
          </div>
        )}
      </UserContext.Consumer>
    </h2>
  </React.Fragment>
);
