import "./login.css";
import { useCaptcha } from "../../hooks/captcha";

export function Login() {
  const code = useCaptcha();
  return (
    <div>
      <header className="mt-3">
        <button
          data-bs-target="#navbar"
          data-bs-toggle="offcanvas"
          className="btn btn-dark bi bi-justify"
        ></button>
        <div className="offcanvas offcanvas-start" id="navbar" tabIndex="-1">
          <div className="offcanvas-header">
            <h3>Navbar</h3>
            <button
              className="btn btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body">..your menu..</div>
        </div>
      </header>
      <div className="form-container">
        <form className="alert alert-warning alert-dismissible">
          <h3 className="bi bi-person-fill">User Login</h3>
          <button className="btn btn-close" data-bs-dismiss="alert"></button>
          <dl>
            <dt>User Id</dt>
            <dd>
              <input type="text" className="form-control" />
            </dd>
            <dt>Password</dt>
            <dd>
              <input type="password" className="form-control" />
            </dd>
            <dt>Verify Yourself</dt>
            <dd>{code}</dd>
          </dl>
          <button className="btn btn-warning w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
