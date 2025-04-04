import { Dropdown } from "./dropdown.tsx";
import styles from "./dropDown.module.css";

export const DropdownList = () => {
  const linkData: string[] = [
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  return (
    <>
      <div className={styles.container}>
        <div data-id="wrapper" className={styles.dropdownWrapper}>
          <Dropdown />
          <ul data-id="dropdown" className={styles.dropdown}>
            {linkData.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
