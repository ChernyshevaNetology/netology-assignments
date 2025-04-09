import "./styles.css";
// import cn from "classnames";

// У кликнутой ссылки/кнопки должен быть доп класс toolbar-item__active"
export const Toolbar = ({ selected, title, activeFilterSelect }) => {
  return (
    <>
      <div className={"toolbar-item"} onClick={activeFilterSelect}>
        {title}
      </div>
    </>
  );
};
