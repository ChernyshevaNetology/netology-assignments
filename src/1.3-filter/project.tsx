import "./styles.css";
import type { TProject } from "./types.ts";

type TProjectProps = {
  projects: TProject[];
};
export const ProjectsList = ({ projects }: TProjectProps) => {
  return (
    <div className={"projects"}>
      {projects.map(({ img }) => (
        <div>
          <img className="image" src={img} alt={"image"} />
        </div>
      ))}
    </div>
  );
};
