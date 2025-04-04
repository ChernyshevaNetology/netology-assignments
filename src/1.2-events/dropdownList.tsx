import "./drop-down-styles.css";
import cn from "classnames";

export const DropdownList = () => {
  const linkData: string[] = [
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  return (
    <>
      <ul data-id="dropdown" className={"dropdown"}>
        {linkData.map((link, idx) => (
          <li className={cn({ active: idx === 2 })} key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
