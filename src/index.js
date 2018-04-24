import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import UserContext from "./UserContext";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <UserContext.Provider value={"Alex"}>
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
    </div>
  </UserContext.Provider>
);

render(<App />, document.getElementById("root"));
