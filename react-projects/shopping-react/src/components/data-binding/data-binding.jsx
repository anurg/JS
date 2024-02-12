import { useState, useEffect } from "react";

export function DataBinding() {
  const [name, setName] = useState("");
  useEffect(() => {
    setName("Anurag");
  }, []);
  return (
    <div className="container-fluid">
      <h2>Data Types:</h2>
      Hello ! {name}
    </div>
  );
}
