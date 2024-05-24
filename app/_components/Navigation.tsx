"use client";
import Image from "next/image";
import Link from "next/link";
import logoImage from "/public/logo.svg";
import HamburgerMenuButton from "@/components/HamburgerMenuButton";
import NavigationMenu from "./NavigationMenu";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [navExpanded, setNavExpanded] = useState<boolean>(false);

  useEffect(() => {
    let timeOut: NodeJS.Timeout;

    // disable transitions on window resize
    function handleWindowResize() {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(timeOut);
      timeOut = setTimeout(
        () => document.body.classList.remove("resize-animation-stopper"),
        400,
      );
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <nav
      className="fixed -right-0 left-0 top-0 z-50 flex flex-row justify-start bg-white px-4 pb-1 pt-5
                    lg:left-5 lg:top-0 lg:pb-2 lg:pt-7"
    >
      <Link href="/" onClick={() => setNavExpanded(false)}>
        <Image
          className="w-[4.5rem] object-contain"
          alt="snap logo"
          src={logoImage}
        />
      </Link>
      <div className="flex-grow">
        <NavigationMenu
          expanded={navExpanded}
          setNavExpanded={setNavExpanded}
        />
      </div>
      <div
        className="-my-1 
                      lg:hidden"
      >
        <HamburgerMenuButton
          navExpanded={navExpanded}
          setNavExpanded={setNavExpanded}
          className="h-7 w-auto fill-almostBlack"
        />
      </div>
    </nav>
  );
}
