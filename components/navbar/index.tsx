"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Linkedin, Instagram, Github } from "@styled-icons/bootstrap";
import { Tabs, Tab } from "@nextui-org/tabs";
import { EmojiEvents, Home, Work } from "@styled-icons/material";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

import "./styles.css";

export const Navbar = () => {
  return (
    <NextUINavbar
      className="nextUiNavbar z-10 fixed left-8 top-1/2 transform -translate-y-1/2 h-3/4 w-20 inline-block outline rounded-large"
      maxWidth="xl"
    >
      <NavbarBrand as="li" className="grow-0">
        <NextLink href="/">
          <Logo />
        </NextLink>
      </NavbarBrand>
      <ul className="lg:flex gap-6 justify-start flex flex-col">
        <Tabs
          aria-label="Tabs colors"
          className="gap-6"
          color={"primary"}
          isVertical={true}
          variant="bordered"
        >
          {siteConfig.navItems.map((item) => (
            <Tab
              key={item.label}
              title={
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium",
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.icon == "EmojiEvents" ? (
                      <EmojiEvents className="w-8 h-8" />
                    ) : item.icon == "Home" ? (
                      <Home className="w-8 h-8" />
                    ) : item.icon == "Work" ? (
                      <Work className="w-8 h-8" />
                    ) : null}
                  </NextLink>
                </NavbarItem>
              }
            />
          ))}
        </Tabs>
      </ul>

      <NavbarItem className="gap-4 flex flex-col box-border ">
        <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
          <Linkedin className="text-default-500" />
        </Link>
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <Github className="text-default-500" />
        </Link>
        <Link
          isExternal
          aria-label="Instagram"
          href={siteConfig.links.instagram}
        >
          <Instagram className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarItem>
    </NextUINavbar>
  );
};
