import { title } from "@/components/primitives";

export default function Skills() {
  return (
    <section className="h-screen text-center mt-20" id="skills">
      <h1 className={title()}>Minhas</h1>
      <h1 className={title({ color: "blue" })}> habilidades</h1>
    </section>
  );
}
