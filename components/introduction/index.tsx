import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

// eslint-disable-next-line import/order
import { title } from "@/components/primitives";

import "./styles.css";
import { siteConfig } from "@/config/site";

export default function Introduction() {
  return (
    <section
      className="flex flex-col md:flex-row justify-center items-center w-full"
      id="introduction"
    >
      <div className="w-3/4">
        <h1 className=" ">
          <div className={title({ color: "yellow" })}>
            ⚡Engenharia Elétrica⚡
          </div>
          <br />
          <div className="indent-12">
            <div className={title({ size: "sm" })}>Discente na </div>
            <div className={title({ color: "blue", size: "sm" })}>UFPR</div>
          </div>
        </h1>
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

        <div className="introduction__logo w-80 h-80 mt-5 rounded-3xl" />
        <a href="#projects">
          <Button className="mt-8" color="primary" variant="shadow">
            Meus projetos
          </Button>
        </a>
        <a href={"mailto:" + siteConfig.links.email}>
          <Button className="mt-8 ml-4" color="primary" variant="bordered">
            Entre em contato
          </Button>
        </a>
      </div>
      <div className="introduction__profile-picture w-full flex justify-center flex-grow">
        <Image
          isBlurred
          alt="Foto de perfil de André Corso Pozzan"
          className=""
          src="/assets/introduction/andre-transparent.png"
        />
      </div>
    </section>
  );
}
