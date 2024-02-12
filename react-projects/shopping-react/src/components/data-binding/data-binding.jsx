export function DataBinding() {

  var regExp = /\+91\d{10}/;
var value = "+919876543210";

  return (
    <div className="container-fluid">
      <h2>Data Types:</h2>
      { (value.match(regExp)) ? "Valid" : "Invalid" }
    </div>
  );
}
