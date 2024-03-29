import { useInView } from "react-intersection-observer";
import { constants } from "../utils/constants";
import { useWindowSize } from "../hooks/useWindowSize";

export function Services() {
  const windowSize = useWindowSize();
  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: windowSize <= 1028 ? "130px" : "0px"
  });
  return (
    <section id="services" className="services">
      <h2 className="section-title">{constants.service.sectionTitle}</h2>
      <h3 className="section-subtitle">{constants.service.sectionSubtitle}</h3>
      <ul className="services__cells">
        {constants.service.cells.map((service) => {
          return (
            <li key={service.title} ref={ref} className={`services__cell ${inView ? "services__cell_visible" : "services__cell_invisible"}`}>
              <div className="services__cell-header">
                <img className="services__cell-icon" src={service.img} alt={service.title} />
                <h4 className="services__cell-title">{service.title}</h4>
              </div>
              <p className="services__cell-description">{service.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
