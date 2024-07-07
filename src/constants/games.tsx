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
  poster?: string;
}

const games: GameData[] = [
  {
    name: "Coin Flip",
    icon: <PiCoinsDuotone size={16} />,
    href: "/coin-flip",
    active: true,
    id: "coin_flip",
    poster: "https://images.unsplash.com/photo-1621739165914-7155e5d4816e?w=1920"
  },
  {
    name: "Dice Roll",
    icon: <GiPerspectiveDiceOne size={16} />,
    href: "/dice-roll",
    active: true,
    id: "dice_roll",
    startDate: "",
    endDate: "",
  },
  {
    name: "Fortune Wheel",
    icon: <GiCartwheel />,
    href: "/fortune-wheel",
    active: true,
    id: "fortune_wheel",
    startDate: "",
    endDate: "",
  },
  {
    name: "NFT Spin",
    icon: <PiSpinnerBold />,
    href: "/nft-spin",
    active: false,
    id: "nft_spin",
    startDate: "",
    endDate: "",
  },
  {
    name: "Plinko",
    icon: <GoDotFill />,
    href: "/plinko",
    active: true,
    id: "plinko",
    startDate: "",
    endDate: "",
  },
];

export const gameIds = games.map((game) => game.id);

export default games;
