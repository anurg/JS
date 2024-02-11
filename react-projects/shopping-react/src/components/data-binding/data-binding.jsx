export function DataBinding() {
  var categories = ["All", "Footwear", "Mobiles", "Electronics"];
  return (
    <div className="container-fluid">
      <h2>Data Types</h2>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      <select>
        {categories.map((category) => (
          <option key={category} value={category}>
            {" "}
            {category}
          </option>
        ))}
      </select>
      <br />
      <ul className="list-unstyled">
        {categories.map((category) => (
          <li key={category}>
            {" "}
            <input type="checkbox" /> <label>{category}</label>{" "}
          </li>
        ))}
      </ul>
      <br />
      <nav className="p-2 border d-flex justify-content-between border-1 border-dark">
        {categories.map((category) => (
          <a className="btn btn-dark" key={category} href="#">
            {" "}
            {category}{" "}
          </a>
        ))}
      </nav>
    </div>
  );
}
