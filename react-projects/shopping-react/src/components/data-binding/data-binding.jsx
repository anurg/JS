export function DataBinding() {
  var menu = [
    { Category: "Electronics", Products: ["TV", "Mobiles"] },
    { Category: "Footwear", Products: ["Boots", "Sneakers"] },
  ];
  return (
    <div className="container-fluid">
      <h2>Data Types:</h2>
      <ol>
        {menu.map((item) => (
          <li key={item.Category}>
            {item.Category}
            <ul>
              {item.Products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <select>
        {menu.map((item) => (
          <optgroup key={item.Category} label={item.Category}>
            {item.Products.map((product) => (
              <option key={product}>{product}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
