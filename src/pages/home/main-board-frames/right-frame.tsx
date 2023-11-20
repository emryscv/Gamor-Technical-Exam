import {useContext} from "react";
import {Theme} from "../../../context/ThemeProvider";

function GameSelectorListItem(props: { name: string }) {
  const {theme} = useContext(Theme);

  return (
    <li className={"p-[0.8vw] flex items-baseline before:text-[0.8vw] before:p-[0.3vw_0.7vw] before:rounded-full before:mr-[0.8vw]" + (theme == "dark" ? " before:bg-[#15171e]" : " before:bg-[#dad6df]")}>
      <p className="m-0 w-[6.3vw] hover:font-bold cursor-pointer relative z-10">{props.name}</p>
      <div className="w-[7.4vw] relative">
        <span className="user1 rounded-full text-[0.8vw] h-[1.6vw] w-[1.6vw] bg-cover absolute z-10 top-[-1.1vw] bg-[#e57237]"></span>
        <span className="user2 rounded-full text-[0.8vw] h-[1.6vw] w-[1.6vw] bg-cover absolute top-[-1.1vw] left-[1vw] bg-[#f2d63e]"></span>
      </div>
      <button className={"border-none p-[0.2vw_0.5vw] rounded-[0.3vw] cursor-pointer z-10"  + (theme == "dark" ? " bg-[#4a4d55] text-[white] hover:bg-[#dad6df] hover:text-black" : " bg-[#dad6df] text-black hover:bg-[#4a4d55] hover:text-[white]")}/*onclick="joinParty(this)"*/>+</button>
    </li>
  );
}

function RightFrame() {
  const {theme} = useContext(Theme);
  
  return (
    <div id="right-frame" className="w-[100%] sm:w-[33.3%] p-[4%] pt-[2%] h-[100vw] sm:h-auto">
      <h2 className="text-left text-[1.2vw] mb-[2vw] mt-[1.5vw] mx-0 font-bold">
        <span className="text-[#5c6167] text-[1.8vw] -tracking-[2px] p-[3%]">01. </span>{" "}
        Choose Platform
      </h2>
      <div className={"text-[1.1vw] p-[0.5vw] rounded-[5vw]" + (theme == "dark" ? " bg-[#1d212a]" : " bg-[#fbfbff]")}>
        <ul id="platform-selector" className="flex p-0 justify-between m-0">
          <li className={"p-[1.1vw] rounded-[5vw] pr-[2.1vw] pl-[3.5vw] relative" + (theme == "dark" ? " bg-[#343841]" : " bg-[#fbfbff]")}><span className="bg-[url(src/assets/celebration.png)] bg-cover inline-block h-[1.5vw] w-[1.5vw] absolute left-[1.1vw]"></span> Party</li>
          <li className="p-[1.1vw]">Matchs</li>
          <li className="p-[1.1vw]">Streams</li>
        </ul>
      </div>

      <h2 className="text-left text-[1.2vw] my-[2vw] mx-0 font-bold">
        <span className="text-[#5c6167] text-[1.8vw] -tracking-[2px] p-[3%]">02. </span> Searching Game
      </h2>
      <div id="game-selector" className={"text-[1.1vw] flex rounded-[1.2vw_1.2vw_0_0] p-[0.4vw_1.1vw] mb-[0.15vw] justify-between items-center"  + (theme == "dark" ? " bg-[#1d212a]" : " bg-[#fbfbff]")}>
        <h3 className="ml-[0.8vw] text-[1.3vw] my-[1vw]">COD Warzone</h3>
        <span id="icon-selector" className="mr-[0.8vw]">
          <img src="src/assets/ajustes-deslizadores.png" className="h-[1.5vw] w-[1.5vw] hover:invert cursor-pointer"/>
        </span>
      </div>
      <div id="game-selector-result" className={"text-[1.1vw] p-[1.1vw] rounded-[0_0_1.2vw_1.2vw] relative"  + (theme == "dark" ? " bg-[#1d212a]" : " bg-[#fbfbff]")}>
        <div className="absolute top-0 left-0 rounded-[10px] w-full h-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <ol className="-z-10 p-0 my-[1.1vw]">
          <GameSelectorListItem name="Dr Team"></GameSelectorListItem>
          <GameSelectorListItem name="Mia Plays"></GameSelectorListItem>
          <GameSelectorListItem name="Keoxer"></GameSelectorListItem>
          <GameSelectorListItem name="Nickmerc"></GameSelectorListItem>
        </ol>
        <a href="#" className={"block text-center p-[1.25vw] rounded-[0.6vw] relative z-10 hover:opacity-50" + (theme == "dark" ? " bg-white text-[#1d212a]" : " bg-[#1d212a] text-white")}>
          Search Now
        </a>
      </div>
    </div>
  );
}

export default RightFrame;
