import { constants } from "../utils/constants";

export function Services() {
  return (
    <section className="services">
      <h2 className="section-title">{constants.service.sectionTitle}</h2>
      <h3 className="section-subtitle">{constants.service.sectionSubtitle}</h3>
      <ul className="services__cells">
        {constants.service.cells.map((service) => {
          return (
            <li className="services__cell">
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
