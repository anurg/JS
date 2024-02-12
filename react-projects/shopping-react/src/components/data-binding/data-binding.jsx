import { useState } from "react";

export function DataBinding() {

const [categories, setCategories] = useState(["All", "Electronics", "Footwear"]);

  return (
    <div className="container-fluid">
      <h2>Data Types:</h2>
      <ol>
      {
        categories.map(category=><li key={category}>{category}</li>)
      }
      </ol>
    </div>
  );
}
