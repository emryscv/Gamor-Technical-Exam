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
        "p-[2vw] rounded-[10px] h-[11vw] relative group cursor-pointer flex items-baseline justify-between sm:block" +
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
        className={`absolute left-[7%] top-[16%] z-[1] text-sm`}
        style={{ color: `${props.data.color}` }}
      >
        /
      </span>
      <span className="text-[#5c6167] relative z-10 text-sm">{props.data.index}</span>
      <h3 className="text-sm my-[0.8vw] relative font-bold p-0 z-[1]">
        {props.data.title}
      </h3>
      <img
        className={"relative z-10 text-sm" + (theme != "dark" ? " invert" : "")}
        src="src/assets/arrow.png"
        alt="->"
      />
    </div>
  );
}

export default CatergoryCard;
