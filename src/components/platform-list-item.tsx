import { useContext } from "react";
import { Theme } from "../context/ThemeProvider";
import celebration from "../assets/images/celebration.png";

export type PlatformListItemProps = {
  val: string;
  active: boolean;
  onClickHandler: (val : string) => void;
};

export function PlatformListItem(props: { data: PlatformListItemProps }) {
  const { theme } = useContext(Theme);

  return (
    <li onClick={() => props.data.onClickHandler(props.data.val)}
      className={
        "p-[3.5vw] sm:p-[1.1vw] cursor-pointer" +
        (props.data.active
          ? " rounded-[15.9vw] pr-[6.68vw] pl-[11.13vw] sm:rounded-[5vw] sm:pr-[2.1vw] sm:pl-[3.5vw] relative" + (theme == "dark" ? " bg-[#343841]" : " bg-[#fbfbff]")
          : "") 
        
      }
    >
      {props.data.active && (
        <img
          src = {celebration }
          className="inline-block absolute h-[4.77vw] w-[4.77vw] left-[3.49vw] sm:h-[1.5vw] sm:w-[1.5vw] sm:left-[1.1vw]"
        ></img>
      )}{" "}
      {props.data.val}
    </li>
  );
}
