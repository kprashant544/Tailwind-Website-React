import { NavLink } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <div className="container">
        <h2>404</h2>
        <h3>Oops, nothing here...</h3>
        <p>Please Check the URL</p>
        <p>
          Otherwise, <NavLink to="/">Click here </NavLink>to redirect to
          homepage.
        </p>
      </div>
    </>
  );
}

export default ErrorPage;
