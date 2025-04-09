import "./styles.css";
import cn from "classnames";

// У кликнутой ссылки/кнопки должен быть доп класс toolbar-item__active"
export const Toolbar = ({
  filters,
  selected,
  onSelectFilter,
}: {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
}) => {
  console.log("filters", filters);
  console.log("selected", selected);
  return (
    <>
      <div className="filters">
        {filters.map((filter, idx) => (
          <div
            onClick={() => onSelectFilter(filter)}
            className={cn("toolbar-item", "cock", "rudi", "puzo", {
              "toolbar-item__active": filter === selected,
              test: idx === 2,
            })}
          >
            {filter}
          </div>
        ))}
      </div>
    </>
  );
};
