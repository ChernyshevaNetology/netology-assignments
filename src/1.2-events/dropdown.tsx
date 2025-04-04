import styles from "./dropDown.module.css";

export const Dropdown = () => {
  return (
    <div>
      <button data-id="toggle" className={styles.btn}>
        <span>Account Settings</span>
        <i className={styles.materialIcons}>public</i>
      </button>
    </div>
  );
};
