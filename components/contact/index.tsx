import { title } from "@/components/primitives";
import "./styles.css";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section className="h-screen text-center mt-24" id="contact">
      <h1>
        <div className={title()}>Entre em</div>
        <div className={title({ color: "cyan" })}> contato</div>
      </h1>
      <div className="w-full h-full flex items-center justify-center contact__email-link">
        <a
          className={title({ color: "cyan" })}
          href={"mailto:" + siteConfig.links.email}
        >
          {siteConfig.links.email}
        </a>
      </div>
    </section>
  );
}
