import games from "./games";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLeaderboard, MdSupport, MdMenuBook } from "react-icons/md";
import { FaDiscord, FaTelegram, FaXTwitter } from "react-icons/fa6";
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
  // {
  //   name: "Daily Claim",
  //   href: "/daily-claim",
  //   icon: <BiSolidOffer />,
  // },
  {
    name: "Airdrop",
    href: "/airdrop",
    icon: <BiSolidOffer />,
  },
];

export const socialOptions = [
  {
    name: "X/Twitter",
    href: "/twitter",
    icon: <FaXTwitter />,
  },
  {
    name: "Telegram",
    href: "/telegram",
    icon: <FaTelegram />,
  },
  // {
  //   name: "Discord",
  //   href: "/discord",
  //   icon: <FaDiscord />,
  // },
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
    heading: "Dashboard",
    options: homeOptions,
    expantion: false,
    expantionState: true,
    sitemapPriority: 1,
  },
  {
    heading: "Games",
    expantion: true,
    expantionState: false,
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
    expantion: false,
    expantionState: true,
    sitemapPriority: 0,
  },
  {
    heading: "Others",
    options: otherOptions,
    expantion: false,
    expantionState: true,
    sitemapPriority: 0.5,
  },
];

export const expantionState = navbars.map(item => item.expantionState)

export default navbars;
