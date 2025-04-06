import { useState } from "react";
import { Dropdown } from "./dropdown.tsx";
import { DropdownList } from "./dropdownList.tsx";

/**
 *  Это страница, где из компонентов собирается наш ui - так понятнее
 *  это ГЛАВНАЯ страница, и в ней уже наши компоненты!
 */
export const DropDownPage = () => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleDisplayDropdown = () => {
    setShow(!show);
  };
  const handleActiveIndex = (idx: number) => {
    setActiveIndex(idx);
  };
  console.log(show);
  return (
    <div className="container">
      <div data-id="wrapper" className={"dropdown-wrapper open"}>
        <Dropdown handleDisplayDropdown={handleDisplayDropdown} />
        <DropdownList
          show={show}
          activeIndex={activeIndex}
          handleActiveIndex={handleActiveIndex}
        />
        {/*        {show && (
          <DropdownList
            activeIndex={activeIndex}
            handleActiveIndex={handleActiveIndex}
          />
        )}*/}
      </div>
    </div>
  );
};
