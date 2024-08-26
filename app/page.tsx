import Introduction from "@/components/introduction";
import Projects from "@/components/projects";

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
        <source src="./introduction-background-video.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className="introduction__background-video introduction__background-video--light"
      >
        <source
          src="./introduction-background-video-white.mp4"
          type="video/mp4"
        />
      </video>
      <div className="introduction__background-overlay">
        <Introduction />
        <Projects />
      </div>
    </>
  );
}
