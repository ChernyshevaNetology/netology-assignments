/*import {useState} from "react";*/
import { Toolbar } from "./toolbar.tsx";
import { ProjectList } from "./projectList.tsx";
import { Project } from "./project.tsx";
import "./styles.css";

export const Portfolio = () => {
  /*    const [activeFilter, setActiveFilter] = useState(activeFilter);*/
  const filters = [
    { button: "All" },
    { button: "Websites" },
    { button: "Flayers" },
    { button: "Business Cards" },
  ];
  /*    const activeFilterSelect = () => {
                            setActiveFilter(activeFilter);
                        };*/
  return (
    <div className="container">
      <div className="filters">
        {filters.map((filter) => (
          <Toolbar
            title={filter.button}
            activeFilterSelect={(filter: any) => {
              console.log(filter);
            }}
          />
        ))}
      </div>
      <div className="projects">
        {ProjectList.map(({ img }) => (
          <Project img={img} />
        ))}
      </div>
    </div>
  );
};
