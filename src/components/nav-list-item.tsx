import { useContext } from "react";
import { Theme } from "../context/ThemeProvider";

export type ListItemProps = {
    title: string;
    active?: boolean;
};  

export function NavListItem(props: { data: ListItemProps }) {
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