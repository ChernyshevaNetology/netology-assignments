import { useState } from "react";
import { Toolbar } from "./toolbar.tsx";
import { projects } from "./projectList.tsx";
import { ProjectsList } from "./project.tsx";
import "./styles.css";

const filterProjectsByCategory = (projects: any, category: string) => {
  if (category === "All") {
    return projects;
  }

  return projects.filter((project: any) => project.category === category);
};

export const Portfolio = () => {
  const [selected, setSelected] = useState("All");
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
