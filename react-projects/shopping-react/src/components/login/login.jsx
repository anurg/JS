import "./login.css";

export default function Login() {
  return (
    <div className="form-container">
      <form>
        <h3> User Login</h3>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input type="text" />
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" />
          </dd>
        </dl>
        <button>Login</button>
      </form>
    </div>
  );
}
