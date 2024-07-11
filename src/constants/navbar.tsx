import games from "./games";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLeaderboard, MdSupport, MdMenuBook } from "react-icons/md";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";

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
  {
    name: "Daily Claim",
    href: "/daily-claim",
    icon: <BiSolidOffer />,
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
];

const otherOptions = [
  {
    name: "Terms & Conditions",
    href: "/policy/terms",
    icon: <MdMenuBook />,
  },
  {
    name: "Support",
    href: "/support/help-center",
    icon: <MdSupport />,
  },
];

const navbars = [
  {
    heading: "Home",
    options: homeOptions,
    sitemapPriority: 1,
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
    sitemapPriority: 0.7,
  },
  {
    heading: "Socials",
    options: socialOptions,
    sitemapPriority: 0,
  },
  {
    heading: "Others",
    options: otherOptions,
    sitemapPriority: 0.5,
  },
];

export default navbars;
