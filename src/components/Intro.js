import { constants } from "../utils/constants";
import { useInView } from "react-intersection-observer";

export function Intro() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <section ref={ref} className={`intro ${inView ? "intro_visible" : ""}`}>
      <h1 className="intro__title">{constants.intro.greeting}</h1>
      <div className="intro__title_accent">{constants.intro.name}</div>
      <h2 className="intro__subtitle">{constants.intro.specialization}</h2>
      <a
        href={constants.intro.buttonLink}
        target="blank"
        className="intro__button"
      >
        {constants.intro.buttonText}
      </a>
    </section>
  );
}
