import { useContext } from "react";
import { Theme } from "../context/ThemeProvider";
import { useMediaQuery } from "react-responsive";

export interface CFBoxProps {
  user?: boolean;
  background: string;
}

export function CFBox(props: {
  props: CFBoxProps;
  children: React.ReactNode | React.ReactNode[];
}) {
  const { theme } = useContext(Theme);
  const matches = useMediaQuery({ query: "(min-width: 640px)" });

  if (!props.props.user) {
    return (
      <div
        className={
          `absolute h-[15.9vw] w-[15.9vw] rounded-[3.18vw] sm:h-[5vw] sm:w-[5vw] sm:rounded-[1vw] bg-bottom bg-[length:80%] bg-no-repeat hover:opacity-80 cursor-pointer` +
          (theme == "dark" ? " bg-[#e57237]" : " bg-[#6921bc]")
        }
        style={{
          top: (!matches
            ? `${Math.ceil(Math.random() * 60) + 45}vw`
            : `${Math.ceil(Math.random() * 20) + 15}vw`),
          left: (!matches
            ? `${Math.ceil(Math.random() * 56) + 10}vw`
            : `${Math.ceil(Math.random() * 20) + 3}vw`),
          backgroundImage: props.props.background,
        }}
      >
        <img src={props.props.background} className="h-[80%] w-[80%] absolute bottom-0 left-[10%]" alt="avatar" />
        {props.children}
      </div>
    );
  } else {
    return null;
  }
}
