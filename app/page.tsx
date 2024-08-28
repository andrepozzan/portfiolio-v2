import Introduction from "@/components/introduction";
import Projects from "@/components/projects";
import SectionTransition from "@/components/sectionTransition";

export default function Home() {
  return (
    <>
      <div className="introduction__video-gradient" />
      <video
        autoPlay
        loop
        muted
        className="introduction__background-video introduction__background-video--dark"
      >
        <source
          src="./assets/background/introduction-background-video.mp4"
          type="video/mp4"
        />
      </video>
      <video
        autoPlay
        loop
        muted
        className="introduction__background-video introduction__background-video--light"
      >
        <source
          src="./assets/background/introduction-background-video-white.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="introduction__divider w-full left-0 opacity-50 h-24 bg-divider absolute shadow-2xl"
        style={{ top: "90vh" }}
      />
      <div className="introduction__background-overlay">
        <Introduction />
        <SectionTransition />
        <Projects />
      </div>
    </>
  );
}
