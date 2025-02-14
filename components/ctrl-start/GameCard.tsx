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
      <div className="h-full grid grid-cols-3 ">
        <PlatformsDisplay platforms={game.parent_platforms} />
        <p className="text-white text-2xl font-bold row-start-2 col-span-3  self-end text-center">
          {game.name}
        </p>
      </div>
    </CardWrapper>
  );
};

export default GameCard;
