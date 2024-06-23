import games from "./games";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLeaderboard } from "react-icons/md";

const homeOptions = [
  {
    name: "Home",
    href: "/",
    icon: <IoHomeOutline />,
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: <MdOutlineLeaderboard />,
  },
];

const navbars = [
  {
    heading: "Home",
    options: homeOptions,
  },
  {
    heading: "Games",
    options: games.map((item) => {
      return {
        name: item.name,
        icon: item.icon,
        href: item.href,
      };
    }),
  },
];

export default navbars;
