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

const socialOptions = [
  {
    name: "X/Twitter",
    href: "/twitter",
    icon: <IoHomeOutline />,
  },
  {
    name: "Discord",
    href: "/discord",
    icon: <IoHomeOutline />,
  },
]

const otherOptions = [
  {
    name: "Terms & Conditions",
    href: "/terms",
    icon: <IoHomeOutline />,
  },
  {
    name: "Support",
    href: "/support",
    icon: <IoHomeOutline />,
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
  {
    heading: "Socials",
    options: socialOptions,
  },
  {
    heading: "Others",
    options: otherOptions,
  },
];

export default navbars;
