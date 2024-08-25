import { Button } from "@nextui-org/button";
import Link from "next/link";

import { title } from "@/components/primitives";

import "./styles.css";
import { siteConfig } from "@/config/site";

export default function Introduction() {
  return (
    <section className="h-screen flex items-center w-full" id="introduction">
      <div className="w-3/4">
        <h1 className={title()}>Cursando </h1>
        <div className={title({ color: "yellow" })}>
          ⚡Engenharia Elétrica⚡
        </div>
        <div className={title()}> na </div>
        <div className={title({ color: "blue" })}>UFPR</div>
        <p className="mt-4">
          Ingressei na universidade em fevereiro de 2024 e desde então tenho me
          dedicado a aprender e me desenvolver em diversas áreas, desde a
          <strong className="text-green-600 dark:text-green-400">
            {" "}
            programação full stack{" "}
          </strong>
          até a eletrônica. Durante esse período, participei de diversos
          projetos acadêmicos e extracurriculares que me permitiram aplicar e
          expandir meus conhecimentos teóricos na prática.
        </p>
        <Button className="mt-4" color="primary" variant="shadow">
          <Link href="#projects">Meus projetos</Link>
        </Button>
        <Button className="mt-4 ml-4" color="primary" variant="bordered">
          <a href={"mailto:" + siteConfig.links.email}>Entre em contato</a>
        </Button>
        <div className="introduction__logo w-80 h-80 mt-10 rounded-3xl" />
      </div>
      <div className="introduction__profile-picture w-full flex justify-center flex-grow">
        <img
          alt="Foto de perfil de André Corso Pozzan"
          className=""
          src="/andre-transparent.png"
        />
      </div>
    </section>
  );
}
