import { useContext } from "react";
import { Theme } from "../../context/ThemeProvider";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

type ListItemProps = {
  title: string;
  active?: boolean;
};

function ListItem(props: { data: ListItemProps }) {
  const { theme } = useContext(Theme);

  return (
    <li
      className={
        "text-sm sm:text-[1.1vw] m-[6vw] sm:m-0 sm:mr-[8%]" +
        (props.data.active
          ? (theme == "dark"
              ? " text-[#fa874f] border-[#fa874f]"
              : " text-[#7e23eb] border-[#7e23eb]") +
            " text-center broder-solid border-[1px] p-[1vw] rounded-[50%]"
          : " text-[#5c6167]")
      }
    >
      <a
        href="#"
        className={
          theme == "dark"
            ? "hover:text-[white]"
            : "hover:text-black hover:font-bold"
        }
      >
        {props.data.title}
      </a>
    </li>
  );
}

function Nav() {
  const { theme } = useContext(Theme);
  const [displayNav, setDisplayNav] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(false);

  const matches = useMediaQuery({ query: "(min-width: 640px)" });

  //setDisplayNav(true);

  useEffect(() => {
    if (matches) {
      setDisplayNav(true);
      setDisplayLogin(true);
    }
  });

  return (
    <nav className="mt-[6.8%] flex justify-between items-baseline mb-[6%]">
      <div
        className="block order-2 relative text-center text-[2.1vw] m-[1.5vw] w-[33%] ml-auto mr-auto font-bold"
        id="logo"
      >
        <span
          className="absolute top-[0.9vw] left-[3.7vw] h-[4.5vw] w-[4.5vw] sm:top-[0.1vw] sm:left-[9.8vw] sm:h-[1.0em] sm:w-[1.0em] border-solid border-[1px] border-[#2e2b2b80] rounded-full bg-[#777] opacity-90"
          id="circle"
        ></span>
        <h1 className="text-[5vw] sm:text-[2.1vw]">Gamor</h1>
      </div>

      <img
        src="src/assets/ajustes-deslizadores.png"
        className={
          "h-[4vw] w-[4vw] sm:hidden block order-1 cursor-pointer" +
          (theme === "dark"
            ? " invert hover:invert-0"
            : " hover:hover:invert-[50%]")
        }
        onClick={() => setDisplayNav(!displayNav)}
        style={{
          visibility: displayNav ? "hidden" : "visible",
        }}
      />

      <ul
        className={
          "float-left hidden z-10 sm:order-1 absolute sm:relative  p-0 m-0 w-[33%] sm:flex sm:flex-row flex-col items-baseline " +
          (theme === "dark"
            ? "text-[#f2f2f8] bg-[#1d212a]"
            : " bg-white border-r border-b border-solid border-[darkgray]")
        }
        id="navigation"
        style={{
          display: displayNav ? "flex" : "none",
        }}
      >
        <span
          className="absolute top-0 right-[5%] cursor-pointer p-[5%] inline-block sm:hidden"
          onClick={() => setDisplayNav(false)}
        >
          x
        </span>
        <ListItem data={{ title: "Home", active: true }}></ListItem>
        <ListItem data={{ title: "Streams" }}></ListItem>
        <ListItem data={{ title: "Party" }}></ListItem>
        <ListItem data={{ title: "Premium" }}></ListItem>
      </ul>

      <img
        id="cf-icon"
        src="src/assets/user-plus-solid.svg"
        alt="add-user"
        height="20px"
        width="20px"
        className={
          "h-[6vw] w-[6vw] self-center sm:hidden block order-3 border-solid border-[1px] rounded-full p-[1vw] cursor-pointer" +
          (theme === "dark"
            ? " border-black invert hover:invert-0"
            : " border-black hover:invert-[50%]")
        }
        onClick={() => setDisplayLogin(true)}
        style={{
          visibility: displayLogin ? "hidden" : "visible",
        }}
      />

      <ul
        className={
          "order-3 absolute right-0 sm:relative float-right text-[1.1vw] w-[100%] sm:w-[33%] sm:m-0 p-0 flex-row-reverse items-baseline hidden z-10" +
          (theme === "dark"
            ? " text-[#f2f2f8] bg-[#1d212a]"
            : " bg-white border-solid border-[darkgray]")
        }
        id="auth"
        style={{
          display: displayLogin ? "flex" : "none",
        }}
      >
        <span
          className="absolute top-[-30%] left-[5%] text-[4.77vw] cursor-pointer p-[5%] inline-block sm:hidden"
          onClick={() => setDisplayLogin(false)}
        >
          x
        </span>
        <li
          className={
            "ml-[10%] text-[3.65vw] py-[4.77vw] px-[7vw] sm:text-[1.1vw] break-keep font-semibold bg-[#15171e] border-solid border-[1px] border-[#383d4b] sm:py-[1.5vw] sm:px-[2.2vw] rounded-full hover:bg-[#787b86] cursor-pointer" +
            (theme === "light" ? " text-[#f2f2f8]" : "")
          }
        >
          <Link to={"sign-up"}>Create Account</Link>
        </li>
        <li
          className={
            "float-right ml-[10%] cursor-pointer text-[3.65vw] sm:text-[1.1vw]" +
            (theme == "dark"
              ? " hover:text-white hover:font-bold"
              : " hover:text-black hover:font-bold")
          }
        >
          <Link to={"login"}>Sign in</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
