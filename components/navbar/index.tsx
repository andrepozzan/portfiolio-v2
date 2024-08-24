"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import {
  Linkedin,
  Instagram,
  Github,
  PersonFill,
  Tools,
  TelephoneFill,
} from "@styled-icons/bootstrap";
import { Tabs, Tab } from "@nextui-org/tabs";
import { EmojiEvents, Home, Work } from "@styled-icons/material";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import "./styles.css";

export const Navbar = () => {
  const handleSelectionChange = (key: string) => {
    const element = document.querySelector(`[id="${key}"]`);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NextUINavbar
      className="nextUiNavbar z-10 fixed left-8 top-1/2 transform -translate-y-1/2 h-3/4 w-20 inline-block rounded-large"
      maxWidth="xl"
    >
      <NavbarBrand as="li" className="grow-0">
        <NextLink href="/">
          <div className="nextUINavbar__logo w-12 h-10 bg-contain" />
        </NextLink>
      </NavbarBrand>
      <ul className="lg:flex gap-6 justify-start flex flex-col">
        <Tabs
          aria-label="Tabs colors"
          classNames={{
            tabList: "gap-4 border-divider",
            cursor: "w-full bg-navbarCursor",
          }}
          color={"primary"}
          isVertical={true}
          size="md"
          variant="light"
          onSelectionChange={(key) => handleSelectionChange(key.toString())}
        >
          {siteConfig.navItems.map((item) => (
            <Tab
              key={item.id}
              title={
                <NavbarItem
                  key={item.id}
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                >
                  <div className="nextUINavbar__icon w-8 h-8">
                    {item.icon == "EmojiEvents" ? (
                      <EmojiEvents />
                    ) : item.icon == "Home" ? (
                      <Home />
                    ) : item.icon == "Work" ? (
                      <Work />
                    ) : item.icon == "PersonFill" ? (
                      <PersonFill />
                    ) : item.icon == "Tools" ? (
                      <Tools className="w-6 h-6" />
                    ) : item.icon == "TelephoneFill" ? (
                      <TelephoneFill className="w-6 h-6" />
                    ) : null}
                  </div>
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
