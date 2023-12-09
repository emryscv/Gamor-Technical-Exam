import { useContext } from "react";
import { Theme } from "../context/ThemeProvider";

type ResultListItemProps = {
  title: string;
  thumbnail_url: string;
  user_id: string;
  viewer_count: number;
};

export function ResultListItem(props: { data: ResultListItemProps }) {
  const { theme } = useContext(Theme);

  return (
    <li
      className={
        "flex items-baseline p-[2.54vw] before:text-[2.54vw] before:p-[0.95vw_2.22vw] h-[11.13vw] sm:h-[3.5vw] before:mr-[2.54vw] sm:p-[0.8vw] sm:before:text-[0.8vw] sm:before:p-[0.3vw_0.7vw] before:rounded-full sm:before:mr-[0.8vw] overflow-hidden" +
        (theme == "dark" ? " before:bg-[#15171e]" : " before:bg-[#dad6df]")
      }
    >
      <p className="block m-0 w-[20.04vw] sm:w-[6.3vw] hover:font-bold cursor-pointer relative z-10">
        {props.data.title.substring(0, 8)}
      </p>
      <div className="w-[23.54vw] sm:w-[7.4vw] relative">
        <img
          src={props.data.thumbnail_url
            .replace("{width}", `${Math.ceil(window.innerWidth * 0.509)}`)
            .replace("{height}", `${Math.ceil(window.innerWidth * 0.509)}`)}
          className="rounded-full absolute z-10 text-[2.54vw] h-[5.09vw] w-[5.09vw] top-[-3.49vw] sm:text-[0.8vw] sm:h-[1.6vw] sm:w-[1.6vw] sm:top-[-1.1vw]"
        ></img>
        <span className="rounded-full absolute text-[2.54vw] h-[5.09vw] w-[5.09vw] top-[-3.49vw] left-[3.18vw] sm:text-[0.8vw] sm:h-[1.6vw] sm:top-[-1.1vw] sm:left-[2vw]">
          {props.data.viewer_count} viewers
        </span>
      </div>
      <button
        className={
          "border-none cursor-pointer z-10 p-[0.63vw_1.59vw] rounded-[0.95vw] sm:p-[0.2vw_0.5vw] sm:rounded-[0.3vw]" +
          (theme == "dark"
            ? " bg-[#4a4d55] text-[white] hover:bg-[#dad6df] hover:text-black"
            : " bg-[#dad6df] text-black hover:bg-[#4a4d55] hover:text-[white]")
        } /*onclick="joinParty(this)"*/
      >
        +
      </button>
    </li>
  );
}
