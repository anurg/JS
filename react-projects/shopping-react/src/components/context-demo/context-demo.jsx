import { useState, createContext, useCallback, useContext } from "react";

let userContext = createContext();

export function SecondLevelComponent() {
  let context = useContext(userContext);
  return (
    <div className="container-fluid p-4 bg-primary text-white">
      <h2>Second Level Component - {context} </h2>
    </div>
  );
}

export function FirstLevelComponent() {
  let context = useContext(userContext);
  return (
    <div className="container-fluid p-4 bg-warning text-white">
      <h2>First Level Component - {context} </h2>
      <SecondLevelComponent />
    </div>
  );
}

export function ContextDemo() {
  const [user, setUser] = useState("David");
  return (
    <div className="container-fluid p-4 bg-dark text-white">
      <userContext.Provider value={user}>
        <h2>Parent</h2>
        <FirstLevelComponent />
      </userContext.Provider>
    </div>
  );
}
