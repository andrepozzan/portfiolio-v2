import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";

import "./styles.css";

export default function About() {
  return (
    <section className="text-center mt-20" id="about">
      <h1>
        <div className={title()}>Sobre</div>
        <div className={title({ color: "yellow" })}> mim</div>
      </h1>
      <div className="flex justify-between mt-20">
        <div className="about__text-content w-2/3 ">
          <ul>
            <li>
              <h3 className={title({ size: "ssm" })}>Matemática</h3>
              <ol className="text-start">
                <h4>Premiações na OBMEP:</h4>
                <li>2017 / Classificado para 2ª fase - nível 1</li>
                <li>2018 / Medalha de bronze - nível 1</li>
                <li>2019 / Menção honrosa - nível 2</li>
                <li>2020 / Cancelada devido pandemia</li>
                <li>2021 / Menção honrosa - nível 3</li>
                <li>2022 / Menção honrosa - nível 3</li>
                <li>2023 / Menção honrosa - nível 3</li>
                <li>2023 / Medalha de bronze regional - nível 3</li>
              </ol>
            </li>
            <li>
              <h3 className={title({ size: "ssm" })}>Xadrez</h3>
              <ol className="text-start">
                <h4>Premiações xadrez:</h4>
                <li>
                  2° lugar no primeiro torneio de xadrez em Guaraniaçu-Pr
                  19/07/2014
                </li>
                <li>
                  18° lugar Campeonato brasileiro de xadrez escolar - São
                  sebastião do Paraíso - MG - 2015
                </li>
                <li>
                  8° lugar no Circuito paranaense de xadrez rápido Piraí do Sul
                  - PR - 2015
                </li>
                <li>1° lugar no circuito de xadrez de cascavel - 2015</li>
                <li>3° lugar no campeonato paranaense de xadrez - 2016 </li>
                <li>
                  15° lugar Campeonato brasileiro de xadrez escolar - 2016
                </li>
                <li>
                  4° lugar campeonato paranaense de xadrez - Piraí do Sul - 2017
                </li>
                <li>
                  Dentre outras diversas participações em olimpíadas municipais
                  e campeonatos regionais
                </li>
              </ol>
            </li>
            <li>
              <h3 className={title({ size: "ssm" })}>Música</h3>
            </li>
            <li>
              <h3 className={title({ size: "ssm" })}>Esportes</h3>
            </li>
          </ul>
        </div>
        <div className="about__photos-grid">
          <div className="flex-col flex justify-center items-center row-span-3 row-start-1 w-full ">
            <Image
              isBlurred
              src="/assets/about/obmep/profile-photo-obmep.jpg"
            />
            <p className="text-tiny mt-3">
              Auditório Unioeste Premiação 18° Obmep - Cascavel - PR (2024)
            </p>
          </div>
          <div className=" row-start-2 col-start-3  ">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/familia-1.png"
            />
            <p className="text-tiny mt-3">Formatura do ensino médio - 2023</p>
          </div>
          <div className="">
            <Image
              isBlurred
              className="w-full "
              src="/assets/about/musica/teclado-1.jpg"
            />
            <p className="text-tiny mt-3">Apresentação em casamento - 2014</p>
          </div>
          <div className="">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/xadrez/equipe-1.jpg"
            />
            <p className="text-tiny mt-3">Jarcans xadrez por equipe - 2023</p>
          </div>
          <div className="row-span-2">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/xadrez/medalhas-1.png"
            />
            <p className="text-tiny mt-3">
              Medalhas de xadrez conquistadas até 2017
            </p>
          </div>
          <div className="col-start-3 row-start-3">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/xadrez/olimpiadas-municipais-1.jpg"
            />
            <p className="text-tiny mt-3">
              Olimpíadas municipais 1° equipe xadrez - Guaraniaçu - PR (2023)
            </p>
          </div>
          <div className="col-start-2 row-start-4 col-span-2">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/ufpr-1.png"
            />
            <p className="text-tiny mt-3">
              Segunda fase vestibular UFPR - Curitiba - PR (2023)
            </p>
          </div>
          <div className="col-start-1 row-start-4 ">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/musica/teclado-toledo-1.jpg"
            />
            <p className="text-tiny mt-3">
              Apresentação no teatro municipal de Toledo - PR (2014)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
