import { PiCoinsDuotone } from "react-icons/pi";
import { GiPerspectiveDiceOne } from "react-icons/gi";
import { GiCartwheel } from "react-icons/gi";
import { PiSpinnerBold } from "react-icons/pi";

const games = [
  {
    name: "Coin Flip",
    icon: <PiCoinsDuotone size={16} />,
    href: "/coin-flip",
    active: true,
  },
  {
    name: "Dice Roll",
    icon: <GiPerspectiveDiceOne size={16} />,
    href: "/dice-roll",
    active: true,
  },
  {
    name: "Fortune Wheel",
    icon: <GiCartwheel />,
    href: "/fortune-wheel",
    active: true,
  },
  {
    name: "NFT Spin",
    icon: <PiSpinnerBold />,
    href: "/nft-spin",
    active: false,
  },
];

export default games;
