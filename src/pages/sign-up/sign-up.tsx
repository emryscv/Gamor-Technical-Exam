import ChangeThemeButton from "../../components/change-theme-button";
import { useContext } from "react";
import { Theme } from "../../context/ThemeProvider";
import { Link } from "react-router-dom";

function SignUp() {
  const { theme } = useContext(Theme);

  return (
    <div className="h-[100vh]">
      <Link to="/">
        <div
          className="block relative text-center text-[4.5vw] sm:text-[4.8vh] m-[1.5vw] w-[33%] ml-auto mr-auto font-bold"
          id="logo"
        >
          <span
            className="absolute top-[0.1vh] left-[22vh] h-[1em] w-[1em] border-solid border-[1px] border-[#2e2b2b80] rounded-full bg-[#777] opacity-90"
            id="circle"
          ></span>
          <h1>Gamor</h1>
        </div>
      </Link>
      <main
        className={
          "m-auto rounded-[2.25vh] p-[7.5vw] w-[62.85vw] sm:w-[67.85vh] sm:p-[7.96vh] flex flex-col justify-between" +
          (theme === "dark"
            ? " bg-[#242831]"
            : " bg-white border-[1px] border-solid border-[darkgray]")
        }
      >
        <h2 className="text-left text-[3.8vw] mb-[4.2vw] mt-[3vw] sm:text-[4.1vh] sm:mb-[4.7vh] sm:mt-[3.39vh] mx-0 font-bold">
          <span className="text-[#5c6167] -tracking-[2px] p-[2vh]">02. </span>{" "}
          Create Account
        </h2>
        <form
          /*onSubmit="login(event)"*/ className="text-[2.9vw] sm:text-[3.17vh] flex flex-col"
        >
          <label htmlFor="name" className="m-[0.5vh] ml-0">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={
              "p-[1vh] rounded-[5vh] text-black" +
              (theme !== "dark"
                ? " border-[darkgray] border-solid border-[1px]"
                : " border-none")
            }
          />
          <label htmlFor="user-name" className="m-[0.5vh] ml-0">
            Username
          </label>
          <input
            type="text"
            name="user-name"
            id="user-name"
            required
            className={
              "p-[1vh] rounded-[5vh] text-black" +
              (theme !== "dark"
                ? " border-[darkgray] border-solid border-[1px]"
                : " border-none")
            }
          />
          <label htmlFor="password" className="m-[0.5vh] ml-0">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className={
              "p-[1vh] rounded-[5vh] text-black" +
              (theme !== "dark"
                ? " border-[darkgray] border-solid border-[1px]"
                : " border-none")
            }
          />
          <input
            id="login-submit"
            type="submit"
            value="Create Account"
            className="p-[1vh] rounded-[5vh] border-none mt-[4vh] cursor-pointer"
          />
        </form>
        <Link
          to={"../sign-up"}
          className={
            "m-auto text-[2.9vw] sm:text-[3.17vh]" +
            (theme !== "dark" ? " text-[#1d212a]" : " text-[#f2f2f8]")
          }
        >
          I have an account
        </Link>
      </main>
      <ChangeThemeButton></ChangeThemeButton>
    </div>
  );
}

export default SignUp;
