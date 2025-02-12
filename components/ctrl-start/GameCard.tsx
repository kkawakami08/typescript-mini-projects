import { Game } from "@/types/rawg-types";

import CardWrapper from "./CardWrapper";
import PlatformsDisplay from "./PlatformsDisplay";
import { getCroppedImageUrl } from "@/lib/rawg";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardWrapper bgImg={getCroppedImageUrl(game.background_image)}>
      <div className="min-h-60 grid grid-cols-3 ">
        <PlatformsDisplay platforms={game.parent_platforms} />
        <p className="text-white text-2xl font-bold row-start-2 col-span-3  self-end text-center">
          {game.name}
        </p>
        <p className="bg-[#FF7F11] text-ctrl-start-green-900 rounded-lg place-self-end self-start w-10 flex items-center justify-center h-10 text-3xl font-extrabold  col-start-3 ">
          {game.esrb_rating.name[0]}
        </p>
      </div>
    </CardWrapper>
  );
};

export default GameCard;
