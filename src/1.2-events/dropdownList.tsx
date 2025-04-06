import "./drop-down-styles.css";
import cn from "classnames";

export const DropdownList = ({ activeIndex, show, handleActiveIndex }: any) => {
  const linkData: string[] = [
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
    "Contacts",
    "About us",
    "Privacy",
  ];
  if (show === false) {
    return null;
  }
  return (
    <>
      <ul data-id="dropdown" className={"dropdown"}>
        {linkData.map((link, idx) => (
          <li
            className={cn({ active: idx === activeIndex })}
            onClick={() => handleActiveIndex(idx)}
            key={link}
          >
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
