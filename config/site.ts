export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "André Corso Pozzan",
  description: "Electrical Engineer and Full Stack Developer",
  navItems: [
    {
      label: "Introduction",
      id: "introduction",
      icon: "Home",
    },
    {
      label: "My Projects",
      id: "projects",
      icon: "Work",
    },
    {
      label: "My Certifications",
      id: "awards",
      icon: "EmojiEvents",
    },
    {
      label: "About me",
      id: "about",
      icon: "PersonFill",
    },
    {
      label: "My Skills ans Tools",
      id: "skills",
      icon: "Tools",
    },
    {
      label: "Contact",
      id: "contact",
      icon: "TelephoneFill",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/andrepozzan",
    linkedin: "https://www.linkedin.com/in/andrepozzan/",
    instagram: "https://www.instagram.com/andrepozzan.eng/",
    twitter: "https://www.linkedin.com/in/andrepozzan/",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    email: "hire-me@andrepozzan.eng.br",
  },
};
