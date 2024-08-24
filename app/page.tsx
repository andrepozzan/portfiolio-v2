import { siteConfig } from "../config/site";

import { title } from "@/components/primitives";

export default function Home() {
  return (
    <>
      {siteConfig.navItems.map((item) => (
        <section key={item.id} className="mb-96" id={item.id}>
          <h1 className={title()} id={item.id}>
            {item.label}{" "}
            <div className={title({ color: "green" })}>
              {" "}
              {"O===={zzzzzzzz>"}
            </div>
            text
          </h1>
        </section>
      ))}
    </>
  );
}
