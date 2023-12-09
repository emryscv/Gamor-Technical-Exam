import { useContext, useEffect, useState } from "react";
import { Theme } from "../context/ThemeProvider";
import selector from "../assets/images/ajustes-deslizadores.png";
import { ResultListItem } from "./result-list-item";
import { getStreams } from "../services/twitch/getStreams";
import { getTopGames } from "../services/twitch/getTopGames";
import { GameSelectorListItem } from "./game-selector-list-item";

export type Game = {
  name: string;
  id: string;
  image: string;
};
export type Stream = {
  title: string;
  id: string;
  user_id: string;
  thumbnail_url: string;
  viewer_count: number;
  started_at: string;
};

export function GameSelector() {
  const { theme } = useContext(Theme);
  const [topGames, setTopGames] = useState([]);
  const [streams, setStreams] = useState([]);
  const [selectedGame, setSelectedGame] = useState({
    name: "",
    id: "0",
    image: "",
  });
  const [displayResult, setDisplayResult] = useState(true);

  useEffect(() => {
    getTopGamesFromTwitch();
  }, []);

  useEffect(() => {
    console.log(selectedGame.id);

    getStreamsFromTwitch(selectedGame.id);
  }, [selectedGame, topGames]);

  async function getStreamsFromTwitch(id: string) {
    const response = await getStreams(id, 10);

    console.log(response.data);

    setStreams(response.data);
  }

  async function getTopGamesFromTwitch() {
    try {
      const response = await getTopGames();

      console.log(response.data);

      setTopGames(response.data);
      setSelectedGame(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const GameSelectorListItemOnClickHandler = (game: Game) => {
    setDisplayResult(true);
    setSelectedGame(game);
  };

  return (
    <>
      <div
        id="game-selector"
        className={
          "justify-between items-center flex text-[3.49vw] p-[1.27vw_3.49vw] mb-[0.47vw] sm:text-[1.1vw]  sm:p-[0.4vw_1.1vw] sm:mb-[0.15vw]" +
          (theme == "dark" ? " bg-[#1d212a]" : " bg-[#fbfbff]") +
          (displayResult
            ? " rounded-[3.81vw_3.81vw_0_0] sm:rounded-[1.2vw_1.2vw_0_0]"
            : " rounded-[3.81vw] sm:rounded-[1.2vw]")
        }
      >
        <ul className="max-h-[26vw] overflow-y-auto">
          {topGames.map((game: Game) => (
            <GameSelectorListItem
              key={game.id}
              data={{
                game: game,
                onClickHandler: GameSelectorListItemOnClickHandler,
                visible: selectedGame.name == game.name || !displayResult,
              }}
            ></GameSelectorListItem>
          ))}
        </ul>
        {displayResult && (
          <img
            onClick={() => setDisplayResult(false)}
            src={selector}
            className="hover:invert cursor-pointer h-[4.77vw] w-[4.77vw] sm:h-[1.5vw] sm:w-[1.5vw]"
          />
        )}
      </div>
      {displayResult && (
        <div
          id="game-selector-result"
          className={
            "relative text-[3.49vw] p-[3.46vw] rounded-[0_0_3.81vw_3.81vw] sm:text-[1.1vw] sm:p-[1.1vw] sm:rounded-[0_0_1.2vw_1.2vw]" +
            (theme == "dark" ? " bg-[#1d212a]" : " bg-[#fbfbff]")
          }
        >
          <div className="absolute top-0 left-0 rounded-[10px] w-full h-[73.2vw] sm:h-[23.05vw] bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <ol className="-z-10 p-0 my-[3.49vw] sm:my-[1.1vw] h-[46.13vw] sm:h-[14.5vw] overflow-y-scroll">
            {streams.map((stream: Stream) => (
              <ResultListItem
                key={stream.id}
                data={{
                  title: stream.title,
                  thumbnail_url: stream.thumbnail_url,
                  user_id: stream.user_id,
                  viewer_count: stream.viewer_count,
                }}
              ></ResultListItem>
            ))}
          </ol>
          <a
            href="#"
            className={
              "block text-center relative z-10 hover:opacity-50 p-[3.97vw] rounded-[1.9vw] sm:p-[1.25vw] sm:rounded-[0.6vw] " +
              (theme == "dark"
                ? " bg-white text-[#1d212a]"
                : " bg-[#1d212a] text-white")
            }
          >
            Search Now
          </a>
        </div>
      )}
    </>
  );
}
