import { useContext, useState } from "react";
import { Theme } from "../../../context/ThemeProvider";
import { GameSelector } from "../../../components/game-selector";
import { PlatformListItem } from "../../../components/platform-list-item";

function RightFrame() {
  const { theme } = useContext(Theme);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("Party");

  return (
    <div
      id="right-frame"
      className="w-[100%] p-[12.72%] pt-[6.36%] sm:w-[33.3%] sm:p-[4%] sm:pt-[2%] h-auto"
    >
      <h2 className="text-left mx-0 font-bold text-[3.81vw] mb-[6.36vw] mt-[4.77vw] sm:text-[1.2vw] sm:mb-[2vw] sm:mt-[1.5vw]">
        <span className="text-[#5c6167] text-[5.72vw] sm:text-[1.8vw] -tracking-[2px] p-[3%]">
          01.{" "}
        </span>{" "}
        Choose Platform
      </h2>
      <div
        className={
          "text-[3.5vw] p-[1.59vw] rounded-[15.9vw] sm:text-[1.1vw] sm:p-[0.5vw] sm:rounded-[5vw]" +
          (theme == "dark" ? " bg-[#1d212a]" : " bg-[#fbfbff]")
        }
      >
        <ul id="platform-selector" className="flex p-0 justify-between m-0">
          <PlatformListItem
            data={{
              active: selectedPlatform == "Party",
              val: "Party",
              onClickHandler: setSelectedPlatform,
            }}
          />
          <PlatformListItem
            data={{
              active: selectedPlatform == "Matchs",
              val: "Matchs",
              onClickHandler: setSelectedPlatform,
            }}
          />
          <PlatformListItem
            data={{
              active: selectedPlatform == "Streams",
              val: "Streams",
              onClickHandler: setSelectedPlatform,
            }}
          />
        </ul>
      </div>
      <h2 className="text-left mx-0 font-bold text-[3.81vw] my-[6.36vw] sm:text-[1.2vw] sm:my-[2vw]">
        <span className="text-[#5c6167] -tracking-[2px] p-[3%] text-[5.72vw] sm:text-[1.8vw]">
          02.{" "}
        </span>{" "}
        Searching Game
      </h2>
      <GameSelector />{" "}
    </div>
  );
}

export default RightFrame;
