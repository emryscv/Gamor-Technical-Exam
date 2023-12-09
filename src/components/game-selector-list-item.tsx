import { Game } from "./game-selector";

export type GameSelectorListItemProps = {
  game: Game;
  onClickHandler: (name: Game) => void;
  visible: boolean;
};

export function GameSelectorListItem(props: {
  data: GameSelectorListItemProps;
}) {
  return (
    <>
      {props.data.visible && (
        <li
          className="cursor-pointer"
          onClick={() => {
            props.data.onClickHandler(props.data.game);
          }}
        >
          <h3 className="ml-[2.54vw] text-[4.13vw] my-[3.18vw] sm:ml-[0.8vw] sm:text-[1.3vw] sm:my-[1vw]">
            {props.data.game.name}
          </h3>
        </li>
      )}
    </>
  );
}
