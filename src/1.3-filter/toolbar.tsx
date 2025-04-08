export const Toolbar = ({ title, onSelectFilter }) => {
  return (
    <>
      <button onClick={onSelectFilter}>{title}</button>
    </>
  );
};
