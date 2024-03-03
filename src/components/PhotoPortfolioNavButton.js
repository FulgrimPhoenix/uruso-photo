export function PhotoPortfolioNavButton({
  title,
  activeColumn,
  activateColumn,
  columnNumber,
}) {
  return (
    <button
      type="button"
      onClick={() => activateColumn(columnNumber)}
      className={`photoPortfolio__menu-item ${
        activeColumn === columnNumber ? "photoPortfolio__menu-item_active" : ""
      }`}
    >
      {title}
    </button>
  );
}
