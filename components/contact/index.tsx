import { title } from "@/components/primitives";

export default function Contact() {
  return (
    <section className="h-screen text-center mt-20" id="contact">
      <h1 className={title()}>Entre em</h1>
      <h1 className={title({ color: "cyan" })}> contato</h1>
    </section>
  );
}
