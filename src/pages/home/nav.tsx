import { useContext } from "react";
import { Theme } from "../../context/ThemeProvider";

type ListItemProps = {
  title: string;
  active?: boolean;
};

function ListItem(props: { data: ListItemProps }) {
  const {theme} = useContext(Theme);

  return (
    <li
      className={
        "text-[1.1vw] mr-[8%]" +
        (props.data.active
          ?  (theme == "dark" ? " text-[#fa874f] border-[#fa874f]": " text-[#7e23eb] border-[#7e23eb]") + " text-center broder-solid border-[1px] p-[1vw] rounded-[50%]"
          : " text-[#5c6167]")
      }
    >
      <a href="#" className={theme == "dark" ? "hover:text-[white]" : "hover:text-black hover:font-bold"}>{props.data.title}</a>
    </li>
  );
}

function Nav() {
  const {theme} = useContext(Theme);

  return (
    <nav className="sm:flex sm:justify-between sm:items-baseline mb-[6%]">
      <div
        className="block sm:order-2 relative text-center text-[2.1vw] m-[1.5vw] w-[33%] ml-auto mr-auto font-bold"
        id="logo"
      >
        <span
          className="absolute top-[0.1vw] left-[9.8vw] h-[1.05em] w-[1.05em] border-solid border-[1px] border-[#2e2b2b80] rounded-full bg-[#777] opacity-90"
          id="circle"
        ></span>
        <h1 className="text-lg sm:text-[2.1vw]">Gamor</h1>
      </div>
      
      <ul className="float-left sm:float-none sm:order-1 p-0 m-0 w-[33%] flex items-baseline" id="navigation">
        <ListItem data={{ title: "Home", active: true }}></ListItem>
        <ListItem data={{ title: "Streams"}}></ListItem>
        <ListItem data={{ title: "Party"}}></ListItem>
        <ListItem data={{ title: "Premium"}}></ListItem>
      </ul>
      <ul className="sm:order-3 float-right sm:float-none text-[1.1vw] w-[33%] m-0 p-0 flex flex-row-reverse items-baseline" id="auth">
        <li className={"ml-[10%] text-[1.1vw] font-semibold bg-[#15171e] border-solid border-[1px] border-[#383d4b] py-[1.5vw] px-[2.2vw] rounded-full hover:bg-[#787b86] cursor-pointer" + (theme === "light" ? " text-[#f2f2f8]" : "") } >
          <a href="create-account.html">Create account</a>
        </li>
        <li className={"float-right ml-[10%] cursor-pointer" + (theme == "dark" ? " hover:text-white hover:font-bold" : " hover:text-black hover:font-bold")}>
          <a href="login.html">Sign in</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
