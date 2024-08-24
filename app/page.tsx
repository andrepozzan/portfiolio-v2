import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="">
      <h1 className={(title(), "mb-96")} id="introduction">
        Home
      </h1>
      <h1 className={(title(), "mb-96")} id="projects">
        My Projecs
      </h1>
      <h1 className={(title(), "mb-96")} id="awards">
        My Certificates and Awards
      </h1>
      <h1 className={(title(), "mb-96")} id="about">
        More About Me
      </h1>
      <h1 className={(title(), "mb-96")} id="skills">
        My Skills and tools
      </h1>
      <h1 className={(title(), "mb-96")} id="contact">
        Contact me
      </h1>
    </section>
  );
}
