import { Dropdown } from "./dropdown.tsx";
import { DropdownList } from "./dropdownList.tsx";

/**
 *  Это страница, где из компонентов собирается наш ui - так понятнее
 *  это ГЛАВНАЯ страница, и в ней уже наши компоненты!
 */
export const DropDownPage = () => {
  return (
    <div className="container">
      <div data-id="wrapper" className={"dropdown-wrapper open"}>
        <Dropdown />
        <DropdownList />
      </div>
    </div>
  );
};
