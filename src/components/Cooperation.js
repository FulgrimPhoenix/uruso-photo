import { constants } from "../utils/constants";

export function Cooperation() {
  return (
    <section id="cooperation" className="cooperation">
      <h2 className="section-title">{constants.cooperation.sectionTitle}</h2>
      <h3 className="section-subtitle">{constants.cooperation.sectionSubtitle}</h3>
      <ul className="cooperation__menu">
        {constants.cooperation.companies.map((company) => {
          return (
            <li key={company.title} className={`cooperation__menu-item cooperation__menu-item_${company.color}`}>
              <div className="cooperation__item-cell">
              <img
                  className="cooperation__item-photo"
                  src={company.logo}
                  alt={company.title}
                />
                <h3 className="cooperation__item-title">{company.title}</h3>
              </div>
              <a className={`cooperation__item-overlay cooperation__item-overlay_${company.color}`} target="blank" href={company.link}>  
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
