import ChangeThemeButton from "../../components/change-theme-button";

function Login() {
  return (
    <>
      <a href="index.html">
        <div id="logo">
          <span id="circle"></span>
          <h1>Gamor</h1>
        </div>
      </a>
      <main className="account-panel">
        <h2>
          <span className="rf-index">01. </span>Log In
        </h2>
        <form /*onSubmit="login(event)"*/>
          <label htmlFor="user-name">Username</label>
          <input type="text" name="user-name" id="user-name" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <input id="login-submit" type="submit" value="Log in" />
        </form>
        <a href="create-account.html">Create new account</a>
      </main>
      <ChangeThemeButton></ChangeThemeButton>
    </>
  );
}

export default Login;
