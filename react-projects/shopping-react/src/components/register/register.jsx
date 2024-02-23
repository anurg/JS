
export function Register() {
    return (
        <div className="container-fluid">
            <form>
                <h2>Register</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="mobile" /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    );

}