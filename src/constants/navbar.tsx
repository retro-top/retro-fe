import games from "./games";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLeaderboard, MdSupport, MdMenuBook } from "react-icons/md";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

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
    icon: <FaXTwitter />,
  },
  {
    name: "Discord",
    href: "/discord",
    icon: <FaDiscord />,
  },
]

const otherOptions = [
  {
    name: "Terms & Conditions",
    href: "/terms",
    icon: <MdMenuBook />,
  },
  {
    name: "Support",
    href: "/support",
    icon: <MdSupport />,
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
