
export function EventDemo() {
    function handleSubmit(e) {
        alert("Later we will post data to API.")
        e.preventDefault();
    }
    return (
        <div className="container-fluid m-2 p-4" >
           <form className="w-50" noValidate>
            User Name: <input type="email"  name="UserName"/> <button type="submit">Submit</button>
           </form>
        </div>
    );
}