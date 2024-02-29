import { constants } from "../utils/constants";

export function Intro() {
  return (
    <section className="intro">
      <h1 className="intro__title">{constants.intro.greeting}</h1>
      <div className="intro__title_accent">{constants.intro.name}</div>
      <h2 className="intro__subtitle">{constants.intro.specialization}</h2>
      <a href={constants.intro.buttonLink} target="blank" className="intro__button">
        {constants.intro.buttonText}
      </a>
    </section>
  );
}
