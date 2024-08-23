"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { EmojiEvents } from "@styled-icons/material/EmojiEvents";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, DiscordIcon, Logo } from "@/components/icons";

import "./styles.css";

export const Navbar = () => {
  return (
    <NextUINavbar
      className="nextUiNavbar z-10 fixed left-8 top-1/2 transform -translate-y-1/2 h-3/4 w-20 inline-block outline rounded-medium"
      maxWidth="xl"
    >
      <NavbarContent className="basis-1/5 sm:basis-ful flex flex-col h-full">
        <NavbarBrand as="li" className="gap-3 max-w-fit flex flex-col">
          <NextLink
            className="flex justify-start items-center gap-1 flex flex-col"
            href="/"
          >
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="lg:flex gap-4 justify-start ml-2 flex flex-col">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                <EmojiEvents className="w-8 h-8" />
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className=" box-border ">
        <NavbarItem className="sm:flex gap-2 flex flex-col self-end box-border">
          <Link
            isExternal
            aria-label="Discord"
            href={siteConfig.links.linkedin}
          >
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
