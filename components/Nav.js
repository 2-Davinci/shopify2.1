import Link from "next/link";
import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Inventory2Outlined } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/router";
const Nav = () => {
  const inactiveLink = "flex gap-1 p-1  ";
  const activeLink = inactiveLink + "bg-white text-blue-900 rounded-l-lg p ";
  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className="text-white p-4  ">
      <Link href={"/"} className="flex items-center gap-1 mb-4 mr-4  ">
        <StorefrontIcon />
        <span>EcommerceAdmin</span>
      </Link>
      <nav className="flex flex-col gap-2 group ">
        <Link
          href={"/"}
          className={pathname === "/" ? activeLink : inactiveLink}>
          <HomeIcon />
          Dashboard
        </Link>
        <Link
          href={"/Products"}
          className={
            pathname.includes("/Products") ? activeLink : inactiveLink
          }>
          <Inventory2Outlined />
          Products
        </Link>
        <Link
          href={"/Orders"}
          className={pathname.includes("/Orders") ? activeLink : inactiveLink}>
          <FormatListBulletedIcon />
          Orders
        </Link>
        <Link
          href={"/Settings"}
          className={
            pathname.includes("/Settings") ? activeLink : inactiveLink
          }>
          <SettingsIcon />
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Nav;
