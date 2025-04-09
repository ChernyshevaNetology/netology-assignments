import { useState } from "react";
import { Toolbar } from "./toolbar.tsx";
import { projects } from "./projects-data.ts";
import { ProjectsList } from "./project.tsx";
import { TProject } from "./types.ts";
import "./styles.css";

const filterProjectsByCategory = (projects: TProject[], category: string) => {
  if (category === "All") {
    return projects;
  }

  return projects.filter((project: TProject) => project.category === category);
};

export const Portfolio = () => {
  const [selected, setSelected] = useState<string>("All");
  const filters: string[] = [
    "All",
    "Websites",
    "Flayers",
    "Business Cards",
    "RUdi",
    "Puzo",
  ];
  const onSelectFilter = (clickedFilter: string) => {
    setSelected(clickedFilter);
  };

  const preparedProjects = filterProjectsByCategory(projects, selected);

  return (
    <div className="container">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectsList projects={preparedProjects} />
    </div>
  );
};
