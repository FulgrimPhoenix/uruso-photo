import { useInView } from "react-intersection-observer";

export function PhotoPortfolioNavButton({
  title,
  activeColumn,
  activateColumn,
  columnNumber,
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => activateColumn(columnNumber)}
      className={`photoPortfolio__menu-item ${
        inView ? "photoPortfolio__menu-item_visible" : ""} 
        ${activeColumn === columnNumber ? "photoPortfolio__menu-item_active" : ""}`}
    >
      {title}
    </button>
  );
}
