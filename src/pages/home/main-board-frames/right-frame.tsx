import {useContext} from "react";
import {Theme} from "../../../context/ThemeProvider";

function GameSelectorListItem(props: { name: string }) {
  const {theme} = useContext(Theme);

  return (
    <li className={"flex items-baseline p-[2.54vw] before:text-[2.54vw] before:p-[0.95vw_2.22vw] before:mr-[2.54vw] sm:p-[0.8vw] sm:before:text-[0.8vw] sm:before:p-[0.3vw_0.7vw] before:rounded-full sm:before:mr-[0.8vw]" + (theme == "dark" ? " before:bg-[#15171e]" : " before:bg-[#dad6df]")}>
      <p className="m-0 w-[20.04vw] sm:w-[6.3vw] hover:font-bold cursor-pointer relative z-10">{props.name}</p>
      <div className="w-[23.54vw] sm:w-[7.4vw] relative">
        <span className="user1 rounded-full bg-cover absolute z-10 text-[2.54vw] h-[5.09vw] w-[5.09vw] top-[-3.49vw] sm:text-[0.8vw] sm:h-[1.6vw] sm:w-[1.6vw] sm:top-[-1.1vw] bg-[#e57237]"></span>
        <span className="user2 rounded-full bg-cover absolute text-[2.54vw] h-[5.09vw] w-[5.09vw] top-[-3.49vw] left-[3.18vw] sm:text-[0.8vw] sm:h-[1.6vw] sm:w-[1.6vw] sm:top-[-1.1vw] sm:left-[1vw] bg-[#f2d63e]"></span>
      </div>
      <button className={"border-none cursor-pointer z-10 p-[0.63vw_1.59vw] rounded-[0.95vw] sm:p-[0.2vw_0.5vw] sm:rounded-[0.3vw]"  + (theme == "dark" ? " bg-[#4a4d55] text-[white] hover:bg-[#dad6df] hover:text-black" : " bg-[#dad6df] text-black hover:bg-[#4a4d55] hover:text-[white]")}/*onclick="joinParty(this)"*/>+</button>
    </li>
  );
}

function RightFrame() {
  const {theme} = useContext(Theme);
  
  return (
    <div id="right-frame" className="w-[100%] p-[12.72%] pt-[6.36%] sm:w-[33.3%] sm:p-[4%] sm:pt-[2%] h-auto">
      <h2 className="text-left text-[3.81vw] mb-[6.36vw] mt-[4.77vw] sm:text-[1.2vw] sm:mb-[2vw] sm:mt-[1.5vw] mx-0 font-bold">
        <span className="text-[#5c6167] text-[5.72vw] sm:text-[1.8vw] -tracking-[2px] p-[3%]">01. </span>{" "}
        Choose Platform
      </h2>
      <div className={"text-[3.5vw] p-[1.59vw] rounded-[15.9vw] sm:text-[1.1vw] sm:p-[0.5vw] sm:rounded-[5vw]" + (theme == "dark" ? " bg-[#1d212a]" : " bg-[#fbfbff]")}>
        <ul id="platform-selector" className="flex p-0 justify-between m-0">
          <li className={"p-[3.5vw] rounded-[15.9vw] pr-[6.68vw] pl-[11.13vw] sm:p-[1.1vw] sm:rounded-[5vw] sm:pr-[2.1vw] sm:pl-[3.5vw] relative" + (theme == "dark" ? " bg-[#343841]" : " bg-[#fbfbff]")}><span className="bg-[url(src/assets/celebration.png)] bg-cover inline-block absolute h-[4.77vw] w-[4.77vw] left-[3.49vw] sm:h-[1.5vw] sm:w-[1.5vw] sm:left-[1.1vw]"></span> Party</li>
          <li className="p-[3.5vw] sm:p-[1.1vw]">Matchs</li>
          <li className="p-[3.5vw] sm:p-[1.1vw]">Streams</li>
        </ul>
      </div>

      <h2 className="text-left mx-0 font-bold text-[3.81vw] my-[6.36vw] sm:text-[1.2vw] sm:my-[2vw]">
        <span className="text-[#5c6167] -tracking-[2px] p-[3%] text-[5.72vw] sm:text-[1.8vw]">02. </span> Searching Game
      </h2>
      <div id="game-selector" className={"justify-between items-center flex text-[3.49vw] rounded[3.81vw_3.81vw_0_0] p-[1.27vw_3.49vw] mb-[0.47vw] sm:text-[1.1vw] sm:rounded-[1.2vw_1.2vw_0_0] sm:p-[0.4vw_1.1vw] sm:mb-[0.15vw]"  + (theme == "dark" ? " bg-[#1d212a]" : " bg-[#fbfbff]")}>
        <h3 className="ml-[2.54vw] text-[4.13vw] my-[3.18vw] sm:ml-[0.8vw] sm:text-[1.3vw] sm:my-[1vw]">COD Warzone</h3>
        <span id="icon-selector" className="mt-[2.54vw] sm:mr-[0.8vw]">
          <img src="src/assets/ajustes-deslizadores.png" className="hover:invert cursor-pointer h-[4.77vw] w-[4.77vw] sm:h-[1.5vw] sm:w-[1.5vw]"/>
        </span>
      </div>
      <div id="game-selector-result" className={"relative text-[3.49vw] p-[3.46vw] rounded-[0_0_3.81vw_3.81vw] sm:text-[1.1vw] sm:p-[1.1vw] sm:rounded-[0_0_1.2vw_1.2vw]"  + (theme == "dark" ? " bg-[#1d212a]" : " bg-[#fbfbff]")}>
        <div className="absolute top-0 left-0 rounded-[10px] w-full h-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <ol className="-z-10 p-0 my-[3.49vw] sm:my-[1.1vw]">
          <GameSelectorListItem name="Dr Team"></GameSelectorListItem>
          <GameSelectorListItem name="Mia Plays"></GameSelectorListItem>
          <GameSelectorListItem name="Keoxer"></GameSelectorListItem>
          <GameSelectorListItem name="Nickmerc"></GameSelectorListItem>
        </ol>
        <a href="#" className={"block text-center relative z-10 hover:opacity-50 p-[3.97vw] rounded-[1.9vw] sm:p-[1.25vw] sm:rounded-[0.6vw] " + (theme == "dark" ? " bg-white text-[#1d212a]" : " bg-[#1d212a] text-white")}>
          Search Now
        </a>
      </div>
    </div>
  );
}

export default RightFrame;
