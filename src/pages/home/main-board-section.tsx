import LeftFrame from "./main-board-frames/left-frame";
import CenterFrame from "./main-board-frames/center-frame";
import RightFrame from "./main-board-frames/right-frame";
import { useContext } from "react";
import { Theme } from "../../context/ThemeProvider";

function MainBoardSection(){
    const { theme } = useContext(Theme);
    return( 
        <section className={"flex flex-col sm:flex-row items-stretch h-auto sm:h-[50vw] mb-[10%] rounded-3xl" + (theme === "dark" ? " bg-[#242831]" : " bg-white border-[1px] border-solid border-[darkgray]")}>
            <LeftFrame></LeftFrame>
            <CenterFrame></CenterFrame>
            <RightFrame></RightFrame>
        </section>
    );
}

export default MainBoardSection;