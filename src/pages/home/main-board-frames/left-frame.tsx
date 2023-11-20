import { Theme } from "../../../context/ThemeProvider";
import { useContext } from "react";

function LeftFrame(){
  const { theme } = useContext(Theme);
    return (
        <div id="left-frame" className="w-[100%] sm:w-[33.3%] p-[5%] h-[100vw] sm:h-auto">
        <p className="text-6xl sm:text-[4.4vw] leading-[1.14] my-[4.4vw]" id="slogan-big">
          start <span className={theme == "dark" ? "text-[#732ad9]" : "text-[#fa874f]"} id="diferent-color">streaming</span> games differently
        </p>
        <p id="slogan-small" className={"text-[1.15vw] mb-[5vw]" + (theme == "dark" ? " text-[#5c6167]" : " text-[#1d212a]")}>
          gamor now has <span id="bolded-text" className={"text-[#f2f2f8] pb-[0.5vw] border-b-solid border-b-[1px] " + (theme == "dark" ? " border-b-[#fa874f]" : " text-black border-b-[#732ad9] font-bold")}>stream party</span> platform
        </p>
        <a className={"text-[1.1vw] py-[1.5vw] px-[2.2vw] rounded-full mr-[10%]" + (theme == "dark" ? " bg-[#373c42] hover:bg-[#dad6df] hover:text-[#373c42]" : " bg-[#dad6df] hover:bg-[#373c42] hover:text-[#dad6df]")} href="create-account.html">Create account</a>
        <a className={"text-[1.1vw] " + (theme == "dark" ? " hover:text-white hover:font-bold" : " hover:text-black hover:font-bold")} href="login.html">Sign in</a>
      </div>
    )
}

export default LeftFrame;