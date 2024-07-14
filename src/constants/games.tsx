import { PiCoinsDuotone } from "react-icons/pi";
import { GiPerspectiveDiceOne } from "react-icons/gi";
import { GiCartwheel } from "react-icons/gi";
import { PiSpinnerBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

export interface GameData {
  name: string;
  icon: React.ReactNode;
  href: string;
  active: boolean;
  id: string;
  startDate?: string | Date;
  endDate?: string | Date;
  poster: string;
}

const games: GameData[] = [
  {
    name: "Coin Flip",
    icon: <PiCoinsDuotone size={16} />,
    href: "/coin-flip",
    active: true,
    id: "coin_flip",
    poster: "/game/dice-roll.webp"
  },
  {
    name: "Dice Roll",
    icon: <GiPerspectiveDiceOne size={16} />,
    href: "/dice-roll",
    active: true,
    id: "dice_roll",
    startDate: "",
    endDate: "",
    poster: "/game/dice-roll.webp"
  },
  {
    name: "Fortune Wheel",
    icon: <GiCartwheel />,
    href: "/fortune-wheel",
    active: true,
    id: "fortune_wheel",
    startDate: "",
    endDate: "",
    poster: "/game/dice-roll.webp"
  },
  {
    name: "NFT Spin",
    icon: <PiSpinnerBold />,
    href: "/nft-spin",
    active: false,
    id: "nft_spin",
    startDate: "",
    endDate: "",
    poster: "/game/dice-roll.webp"
  },
  {
    name: "Plinko",
    icon: <GoDotFill />,
    href: "/plinko",
    active: true,
    id: "plinko",
    startDate: "",
    endDate: "",
    poster: "/game/dice-roll.webp"
  },
];

export const gameIds = games.map((game) => game.id);

export default games;
