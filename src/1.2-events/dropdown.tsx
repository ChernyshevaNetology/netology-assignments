import { MouseEventHandler } from "react";
import "./drop-down-styles.css";

type TDropdownListProps = {
  handleDisplayDropdown: MouseEventHandler<HTMLButtonElement>;
};

export const Dropdown = ({ handleDisplayDropdown }: TDropdownListProps) => {
  return (
    <>
      <button className={"btn"} onClick={handleDisplayDropdown}>
        <span>Account Settings</span>
        <i className={"material-icons"}>public</i>
      </button>
    </>
  );
};
