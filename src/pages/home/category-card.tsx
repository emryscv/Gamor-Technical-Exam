import { useContext } from "react";
import { Theme } from "../../context/ThemeProvider";

type CatergoryCardProps = {
  index: string;
  color?: string;
  title: string;
  background?: boolean;
};

function CatergoryCard(props: { data: CatergoryCardProps }) {
  const { theme } = useContext(Theme);

  return (
    <div
      className={
        " rounded-[10px] relative group cursor-pointer grid grid-cols-3 items-baseline justify-between p-[6.36vw] sm:block sm:p-[2vw]" +
        (theme === "dark"
          ? " bg-[#242831] "
          : " bg-white border-[1px] border-solid border-[darkgray]")
      }
      style={{
        backgroundImage: props.data.background
          ? "url(src/assets/categories.png)"
          : "",
        backgroundSize: "cover",
      }}
    >
      <div
        className={
          "absolute top-[0] left-[0] rounded-[10px] w-[100%] opacity-50 group-hover:h-[100%] transition-all duration-200" +
          (props.data.background ? " h-[100%]" : " h-0") +
          (theme == "dark" ? " bg-[#7e1edf]" : " bg-[#fa874f]")
        }
      ></div>

      <span
        className={`absolute left-[5%] top-[30%] sm:left-[3%] md:left-[7%] sm:top-[16%] z-[1]`}
        style={{ color: `${props.data.color}` }}
      >
        /
      </span>
      <span className="text-[#5c6167] relative z-10 w-[20vw]">{props.data.index}</span>
      <h3 className="my-[0.8vw] w-[30vw] relative font-bold p-0 z-[1]">
        {props.data.title}
      </h3>
      <img
        className={"relative z-10 ml-auto sm:ml-0" + (theme != "dark" ? " invert" : "")}
        src="src/assets/arrow.png"
        alt="->"
      />
    </div>
  );
}

export default CatergoryCard;
