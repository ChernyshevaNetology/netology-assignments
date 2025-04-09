import "./styles.css";

export const ProjectsList = ({ projects }: any) => {
  return (
    <div className={"projects"}>
      {projects.map(({ img, imgTitle }: any) => (
        <div>
          <img className="image" src={img} alt={imgTitle} />
        </div>
      ))}
    </div>
  );
};
