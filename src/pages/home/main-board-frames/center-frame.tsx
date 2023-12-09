import { useContext, useEffect, useState } from "react";
import { Theme } from "../../../context/ThemeProvider";
import ojo from "../../../assets/images/ojo.png";
import center_frame_orange from "../../../assets/images/center-frame-orange.png";
import center_frame_violet from "../../../assets/images/center-frame-violet.png";
import user_plus_solid from "../../../assets/images/user-plus-solid.svg";
import cf_box1_image from "../../../assets/images/cf-box1-image.png";
import cf_box2_image from "../../../assets/images/cf-box2-image.png";
import user from "../../../assets/images/user.png";
import { CFBox } from "../../../components/cf-box";
import { getStreams } from "../../../services/twitch/getStreams";
import { getGame } from "../../../services/twitch/getGame";
import { Game, Stream } from "../../../components/game-selector";

function CenterFrame() {
  const { theme } = useContext(Theme);
  const [game, setGame] = useState<Game>({
    name: "",
    id: "0",
    image: "",
  });
  const [stream, setStream] = useState<Stream>({
    title: "",
    id: "",
    user_id: "",
    thumbnail_url: "",
    viewer_count: 0,
    started_at: "",
  });
  
  useEffect(() => {
    getStreamsFromTwitch(game.id);
  }, []);

  useEffect(() => {
    getGameFromTwitch("Fornite");
  }, []);

  async function getGameFromTwitch(name: string) {
    const response = await getGame(name);
    setGame(response.data);
  }

  async function getStreamsFromTwitch(id: string) {
    const response = await getStreams(id, 1);

    console.log(response.data);

    setStream(response.data[0]);
  }

  return (
    <div
      id="center-frame"
      className={
        "w-[100%] sm:w-[33.3%] bg-bottom bg-[length:100%] bg-no-repeat relative text-center pt-[2%] h-[146vw] sm:h-auto" +
        (theme == "dark" ? ` bg-[#fa874f]` : ` bg-[#7e23eb]`)
      }
    >
      <img
        src={theme == "dark" ? center_frame_orange : center_frame_violet}
        className="absolute bottom-0"
      />
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
            src={user_plus_solid}
            alt="add-user"
            height="20px"
            width="20px"
            className="h-[9.54vw] w-[4.77vw] sm:h-[3vw] sm:w-[1.5vw] ml-[10%] self-center"
          />
        </span>
        {stream.started_at.substring(11, 16) || "00:00"}
      </div>

      <CFBox
        props={{
          background: cf_box1_image,
        }}
      >
        <span
          id="cf-box1-icon"
          className="rounded-full block h-[6.36vw] w-[6.36vw] sm:h-[2vw] sm:w-[2vw] bg-[#282420e6] absolute top-[-1.59vw] left-[-1.59vw] sm:top-[-0.5vw] sm:left-[-0.5vw]"
        >
          <img
            src={ojo}
            className="h-[3.81vw] w-[3.81vw] sm:h-[1.2vw] sm:w-[1.2vw] m-auto mt-[1.17vw] sm:mt-[0.37vw] invert"
          />
        </span>
      </CFBox>
      <CFBox
        props={{
          background: cf_box2_image,
        }}
      >
        <></>
      </CFBox>
      <CFBox
        props={{
          user: true,
          background: user,
        }}
      >
        <></>
      </CFBox>
    </div>
  );
}

export default CenterFrame;
