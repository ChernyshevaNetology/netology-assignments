export const Toolbar = ({ selected, title, activeFilterSelect }) => {
  return (
    <>
      <button onClick={activeFilterSelect}>{title}</button>
    </>
  );
};
