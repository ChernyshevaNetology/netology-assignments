import "./styles.css";

export const Project = ({ img, imgTitle }) => {
  return (
    <div>
      <img className="image" src={img} alt={imgTitle} />
    </div>
  );
};
