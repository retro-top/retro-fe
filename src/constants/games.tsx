import { PiCoinsDuotone } from "react-icons/pi";
import { GiPerspectiveDiceOne } from "react-icons/gi";
import { GiCartwheel } from "react-icons/gi";
import { PiSpinnerBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const games = [
  {
    name: "Coin Flip",
    icon: <PiCoinsDuotone size={16} />,
    href: "/coin-flip",
    active: true,
    id: "coin_flip"
  },
  {
    name: "Dice Roll",
    icon: <GiPerspectiveDiceOne size={16} />,
    href: "/dice-roll",
    active: true,
    id: "dice_roll"
  },
  {
    name: "Fortune Wheel",
    icon: <GiCartwheel />,
    href: "/fortune-wheel",
    active: true,
    id: "fortune_wheel"
  },
  {
    name: "NFT Spin",
    icon: <PiSpinnerBold />,
    href: "/nft-spin",
    active: false,
    id: "nft_spin"
  },
  {
    name: "Plinko",
    icon: <GoDotFill />,
    href: "/plinko",
    active: true,
    id: "plinko"
  },
];

export const gameIds = games.map((game) => game.id);

export default games;
