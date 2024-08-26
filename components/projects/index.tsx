"use client";

import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { Tooltip } from "@nextui-org/tooltip";

import ModalComponent from "../modal";

import { title } from "@/components/primitives";

import "./styles.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);


  type ProjectProps = {
    id: number;
    technologies: string;
    title: string;
    media: string;
    status: string;
    description: string;
    buttonText: string;
  };

  function myFunction() {
    console.log("Hello");
    
  }

  return (
    <section className="h-screen text-center " id="projects">
      <h1 className={title()}>Meus</h1>
      <h1 className={title({ color: "blue" })}> projetos</h1>
      <ul className="flex justify-evenly flex-wrap items-center mt-10 gap-10 md:gap-5">
        {projects.map((project: ProjectProps) => {
          return (
            <>
              <ModalComponent myFunction={myFunction} />
              <Tooltip content={project.title} showArrow={true}>
                <Card
                  key={project.id}
                  isFooterBlurred
                  isPressable
                  className="w-1/4 min-w-96 h-[350px] col-span-12 sm:col-span-5 projects__card shadow-purple-200"
                  onPress={myFunction}
                >
                  <CardHeader className="pb-2 pt-2 px-4 flex-col items-start z-20 projects__card-header">
                    <small className="text-default-500 uppercase">
                      {project.technologies}
                    </small>
                    <h4 className={title({ size: "ssm" })}>{project.title}</h4>
                  </CardHeader>
                  <Image
                    isBlurred
                    removeWrapper
                    alt={project.title}
                    className="z-0 w-full h-full object-cover projects__card-image z-10"
                    src={project.media}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">
                      {project.description}
                    </p>
                    <Button
                      className="font-bold text-white bg-black/20"
                      color="default"
                      radius="lg"
                      size="sm"
                      variant="flat"
                    >
                      {project.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              </Tooltip>
            </>
          );
        })}
      </ul>
    </section>
  );
}
