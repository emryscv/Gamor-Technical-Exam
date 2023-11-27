import { useContext } from "react";
import { Theme } from "../../../context/ThemeProvider";
import useMediaQuery from "react-responsive";

interface CFBoxProps {
  user?: boolean;
  top: number;
  left: number;
  background: string;
}

function CFBox(props: {
  props: CFBoxProps;
  children: React.ReactNode | React.ReactNode[];
}) {
  const { theme } = useContext(Theme);
  const matches = useMediaQuery({ query: '(min-width: 640px)' })

  if (!props.props.user) {
    return (
      <div
        className={
          `absolute h-[15.9vw] w-[15.9vw] rounded-[3.18vw] sm:h-[5vw] sm:w-[5vw] sm:rounded-[1vw] bg-bottom bg-[length:80%] bg-no-repeat hover:opacity-80 cursor-pointer` +
          (theme == "dark" ? " bg-[#e57237]" : " bg-[#6921bc]")
        }
        style={{
          top: matches ? `${Math.random() * 80 + 100}vw` : `${Math.random() * 22 + 15}vw`,
          left: matches ? `${Math.random() * 80 + 100}vw` : `${Math.random() * 22 + 3}vw`,
          backgroundImage: props.props.background,
        }}
      >
        {props.children}
      </div>
    );
  } else {
    return null;
  }
}

function CenterFrame() {
  const { theme } = useContext(Theme);

  return (
    <div
      id="center-frame"
      className={
        "w-[100%] sm:w-[33.3%] bg-bottom bg-[length:100%] bg-no-repeat relative text-center pt-[2%] h-[146vw] sm:h-auto" +
        (theme == "dark"
          ? " bg-[#fa874f] bg-[url('assets/center-frame-orange.png')]"
          : " bg-[#7e23eb] bg-[url('assets/center-frame-violet.png')]")
      }
    >
      <h2 className="text-[5.1vw] mt:[9.5%] mb-[3.18%] sm:text-[1.6vw] sm:mt-[3%] sm:mb-[1%] font-bold">
        Fortnite New Season
      </h2>
      <p
        className={
          "mt-[0] mb-[12%]" +
          (theme == "dark" ? " text-[#db6b32]" : " text-[#6921bc] font-bold")
        }
      >
        Join Live Stream
      </p>

      <div
        id="stream-date"
        className={
          "relative inline-block rounded-full font-bold bg-white ml-[8%] py-[3.81vw] px-[8.9vw] text-[4.77vw] sm:py-[1.2vw] sm:px-[2.8vw] sm:text-[1.5vw]" +
          (theme == "dark" ? " text-[#fa874f]" : " text-[#7e23eb]")
        }
      >
        <span
          id="cf-icon-container"
          /*onclick="joinStream()"*/ className="absolute bg-white opacity-50 rounded-full h-[2.7em] w-[2.7em] top-[-30%] left-[-30%] flex justify-center hover:opacity-100 cursor-pointer"
        >
          <img
            id="cf-icon"
            src="src/assets/user-plus-solid.svg"
            alt="add-user"
            height="20px"
            width="20px"
            className="h-[9.54vw] w-[4.77vw] sm:h-[3vw] sm:w-[1.5vw] ml-[10%] self-center"
          />
        </span>
        11&nbsp;:&nbsp;45
      </div>

      <CFBox
        props={{
          top: theme == "black" ? 25 : 20,
          left: theme == "black" ? 2 : 3,
          background: "url(src/assets/cf-box1-image.png)",
        }}
      >
        <span
          id="cf-box1-icon"
          className="rounded-full block h-[2vw] w-[2vw] bg-[#282420e6] absolute top-[-0.5vw] left-[-0.5vw]"
        >
          <img
            src="src/assets/ojo.png"
            className="h-[1.2vw] w-[1.2vw] m-auto mt-[0.37vw] invert"
          />
        </span>
      </CFBox>
      <CFBox
        props={{
          top: theme == "black" ? 20 : 26,
          left: 20,
          background: "url(src/assets/cf-box2-image.png)",
        }}
      >
        <></>
      </CFBox>
      <CFBox
        props={{
          user: true,
          top: theme == "black" ? 15 : 16,
          left: theme == "black" ? 3 : 16,
          background: "url(src/assets/user.png)",
        }}
      >
        <></>
      </CFBox>
    </div>
  );
}

export default CenterFrame;
