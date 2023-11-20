import ChangeThemeButton from "../../components/change-theme-button";

function SignUp(){
    return(
        <>
        <a href="index.html">
        <div id="logo">
            <span id="circle"></span>
            <h1>Gamor</h1>
        </div>
        </a>
        <main className="account-panel">
            <h2><span className="rf-index">02. </span>Create Account</h2>
            <form /*onsubmit="createAccount(event)"*/>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="user-name">Username</label>
                <input type="text" name="user-name" id="user-name" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
                <input id="login-submit" type="submit" value="Create Account" />
            </form>
            <a href="login.html">Log in</a>
        </main>
        <ChangeThemeButton></ChangeThemeButton>
        </>
    )
}

export default SignUp;