"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Children } from "react";
import IconArrow from "./icons/IconArrow";
import iconTodo from "/public/icon-todo.svg";
import iconCalendar from "/public/icon-calendar.svg";
import iconReminders from "/public/icon-reminders.svg";
import iconPlanning from "/public/icon-planning.svg";
import { StaticImageData } from "next/image";

type NavigationMenuProps = {
  expanded: boolean;
  setNavExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavigationMenu({
  expanded = false,
  setNavExpanded,
}: NavigationMenuProps) {
  let translatexTW = expanded ? "translate-x-0" : "translate-x-full";
  const [menuExpanded, setMenuExpanded] = useState("");

  // close menus if clicked somewhere else on screen
  function handleClick(event: MouseEvent) {
    if (event.target instanceof HTMLElement) {
      if ("menuitem" in event.target.dataset == false) {
        setMenuExpanded("");
      }
    }
  }

  // handle click anywhere on screen to close menu item if necessary
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  });

  return (
    <section
      className={`fixed bottom-0 right-0 top-0 -z-10 w-56 select-none bg-white duration-500 ${translatexTW} 
                lg:static lg:right-auto lg:top-0 lg:flex lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:transition-none`}
    >
      <ul
        className="ml-4 mt-[4.5rem] flex flex-col gap-4 text-mediumGray
                    lg:static lg:ml-8 lg:mt-0 lg:w-full lg:flex-row lg:justify-start lg:gap-8"
      >
        <MenuItem
          name="Features"
          menuExpanded={menuExpanded}
          setNavExpanded={setNavExpanded}
          setMenuExpanded={setMenuExpanded}
        >
          <Link href="/todo-list">
            <SubmenuItem
              name="Todo List"
              icon={iconTodo}
              setNavExpanded={setNavExpanded}
              setMenuExpanded={setMenuExpanded}
            />
          </Link>
          <Link href="/calendar">
            <SubmenuItem
              name="Calendar"
              icon={iconCalendar}
              setNavExpanded={setNavExpanded}
              setMenuExpanded={setMenuExpanded}
            />
          </Link>
          <Link href="/reminders">
            <SubmenuItem
              name="Reminders"
              icon={iconReminders}
              setNavExpanded={setNavExpanded}
              setMenuExpanded={setMenuExpanded}
            />
          </Link>
          <Link href="/planning">
            <SubmenuItem
              name="Planning"
              icon={iconPlanning}
              setNavExpanded={setNavExpanded}
              setMenuExpanded={setMenuExpanded}
            />
          </Link>
        </MenuItem>
        <MenuItem
          name="Company"
          menuExpanded={menuExpanded}
          setNavExpanded={setNavExpanded}
          setMenuExpanded={setMenuExpanded}
        >
          <Link href="/history">
            <SubmenuItem
              name="History"
              setNavExpanded={setNavExpanded}
              setMenuExpanded={setMenuExpanded}
            />
          </Link>
          <Link href="our-team">
            <SubmenuItem
              name="Our Team"
              setNavExpanded={setNavExpanded}
              setMenuExpanded={setMenuExpanded}
            />
          </Link>
          <Link href="/blog">
            <SubmenuItem
              name="Blog"
              setNavExpanded={setNavExpanded}
              setMenuExpanded={setMenuExpanded}
            />
          </Link>
        </MenuItem>
        <Link href="/careers">
          <MenuItem
            name="Careers"
            menuExpanded={menuExpanded}
            setNavExpanded={setNavExpanded}
            setMenuExpanded={setMenuExpanded}
          />
        </Link>
        <Link href="/about">
          <MenuItem
            name="About"
            menuExpanded={menuExpanded}
            setNavExpanded={setNavExpanded}
            setMenuExpanded={setMenuExpanded}
          />
        </Link>
      </ul>
      <LoginRegister
        setNavExpanded={setNavExpanded}
        setMenuExpanded={setMenuExpanded}
      />
    </section>
  );
}

//
// Returns a single top level navigation element
//
type MenuItemProps = {
  name: string;
  children?: React.ReactNode;
  menuExpanded?: string;
  setNavExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuExpanded: React.Dispatch<React.SetStateAction<string>>;
};

function MenuItem({
  name,
  children,
  menuExpanded,
  setNavExpanded,
  setMenuExpanded,
}: MenuItemProps) {
  const expanded = menuExpanded === name;

  // build submenu items
  let ariaExpanedStyle = getAriaExpandedStyle(Children.count(children));
  const subMenuItems = children ? (
    <div
      aria-expanded={expanded}
      className={`ml-6 h-0 overflow-clip transition-all duration-500 ${ariaExpanedStyle}
                lg:fixed lg:ml-0 lg:rounded-lg lg:bg-white lg:pl-4 lg:pr-8 lg:shadow-xl`}
    >
      <ul>{children}</ul>
    </div>
  ) : (
    ""
  );

  // open/close submenus and navigation
  function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    // event.stopPropagation();
    if (expanded) setMenuExpanded("");
    else setMenuExpanded(name);
    if (!children) setNavExpanded(false);
  }

  return (
    <li
      className="cursor-pointer stroke-mediumGray text-sm tracking-wide duration-300 hover:stroke-almostBlack hover:text-almostBlack
                lg:text-xs"
      onClick={handleClick}
      data-menuitem="true"
    >
      {name}
      {children ? (
        <IconArrow
          expanded={expanded}
          className="ml-3 inline lg:ml-2"
          pathClassName="duration-500"
        />
      ) : (
        ""
      )}
      {subMenuItems}
    </li>
  );
}

//
// Returns a single sub level navigation element
//
type SubmenuItemProps = {
  name: string;
  icon?: StaticImageData;
  setNavExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuExpanded: React.Dispatch<React.SetStateAction<string>>;
};

function SubmenuItem({
  name,
  icon,
  setNavExpanded,
  setMenuExpanded,
}: SubmenuItemProps) {
  function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    // event.stopPropagation();
    setNavExpanded(false);
    setMenuExpanded("");
  }

  return (
    <li
      className="pt-4 text-mediumGray duration-300 first-of-type:pt-6 hover:text-almostBlack"
      onClick={handleClick}
    >
      {icon ? (
        <Image
          className="mb-1 mr-3 inline h-4 w-auto"
          alt="todo list icon"
          src={icon}
        />
      ) : (
        ""
      )}
      {name}
    </li>
  );
}

//
// Login, Register buttons
//
type LoginRegisterProps = {
  setNavExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuExpanded: React.Dispatch<React.SetStateAction<string>>;
};
function LoginRegister({
  setNavExpanded,
  setMenuExpanded,
}: LoginRegisterProps) {
  function handleClick() {
    setNavExpanded(false);
    setMenuExpanded("");
  }

  return (
    <ul
      className="mt-6 flex w-auto flex-col items-center gap-4
                  text-xs 
                  lg:-mt-[0.55rem] lg:mr-4 lg:flex-row lg:gap-9"
    >
      <Link href="/login">
        <li
          onClick={handleClick}
          className="cursor-pointer text-mediumGray duration-300 hover:text-almostBlack"
        >
          Login
        </li>
      </Link>
      <Link href="/register">
        <li
          onClick={handleClick}
          className="group cursor-pointer  text-mediumGray duration-300 hover:text-almostBlack"
        >
          <div
            className="rounded-xl border-2 border-mediumGray px-14 py-2 duration-300 group-hover:border-l-almostBlack
                      lg:px-5"
          >
            Register
          </div>
        </li>
      </Link>
    </ul>
  );
}

//
// When a top level navigation menu gets expanded,
//the height of sub menu depends on number of sub menus (children)
//
function getAriaExpandedStyle(numberOfChildren: number) {
  let result = "";
  switch (numberOfChildren) {
    case 2:
      result = "aria-expanded:h-20";
      break;
    case 3:
      result = "aria-expanded:h-[8.5rem]";
      break;
    case 4:
      result = "aria-expanded:h-44 lg:aria-expanded:h-48";
      break;
    default:
      result = "aria-expanded:h-40";
      break;
  }
  return result;
}
