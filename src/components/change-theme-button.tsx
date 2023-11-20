import { useContext } from 'react';
import { Theme } from '../context/ThemeProvider';

function ChangeThemeButton(){
    const { theme, setTheme } = useContext(Theme);
    return (
      <button className = {"fixed bottom-[1vw] right-[1vw] h-[5vw] w-[5vw] border-solid border-[1px] border-[darkgray] rounded-[1vw]  hover:opacity-50" + (theme == "dark" ? " bg-[#fbfbff]": " bg-[#1d212a]")}
        onClick={() => setTheme()}
      >
      </button>
    );
}

export default ChangeThemeButton;