import Home from "./pages/home/home";
import { Theme } from "./context/ThemeProvider";
import { useContext } from "react";


function App() {
  const { theme } = useContext(Theme);

  return (
  <div className={"box-border p-[6%] text-[1vw] " + (theme === "dark" ? "text-[#f2f2f8] bg-[#1d212a]" : "")}>
        <Home></Home>
    </div>
  )
}

export default App
