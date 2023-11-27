import { Theme } from "../../../context/ThemeProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function LeftFrame(){
  const { theme } = useContext(Theme);
    return (
        <div id="left-frame" className="w-[100%] p-[15.9%] sm:w-[33.3%]  sm:p-[5%]  h-auto">
        <p className="text-[14vw] my-[14vw] sm:text-[4.4vw] sm:my-[4.4vw] leading-[1.14] " id="slogan-big">
          start <span className={theme == "dark" ? "text-[#732ad9]" : "text-[#fa874f]"} id="diferent-color">streaming</span> games differently
        </p>
        <p id="slogan-small" className={"text-[3.5vw] mb-[15.9vw] sm:text-[1.15vw] sm:mb-[5vw]" + (theme == "dark" ? " text-[#5c6167]" : " text-[#1d212a]")}>
          gamor now has <span id="bolded-text" className={"text-[#f2f2f8] pb-[0.5vw] border-b-solid border-b-[1px] " + (theme == "dark" ? " border-b-[#fa874f]" : " text-black border-b-[#732ad9] font-bold")}>stream party</span> platform
        </p>
        <Link to={"sign-up"} className={"text-[3.65vw] py-[4.77vw] px-[7vw] sm:text-[1.1vw] sm:py-[1.5vw] sm:px-[2.2vw] rounded-full mr-[10%]" + (theme == "dark" ? " bg-[#373c42] hover:bg-[#dad6df] hover:text-[#373c42]" : " bg-[#dad6df] hover:bg-[#373c42] hover:text-[#dad6df]")}>Create account</Link>
        <Link to={"login"} className={"text-[3.65vw] sm:text-[1.1vw] " + (theme == "dark" ? " hover:text-white hover:font-bold" : " hover:text-black hover:font-bold")}>Sign in</Link>
      </div>
    )
}

export default LeftFrame;
