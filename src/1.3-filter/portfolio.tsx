/*import {useState} from "react";*/
import { Toolbar } from "./toolbar.tsx";
import { ProjectList } from "./projectList.tsx";
import { Project } from "./project.tsx";

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
    <div>
      {filters.map((filter) => (
        <Toolbar
          title={filter.button}
          activeFilterSelect={(filter: any) => {
            console.log(filter);
          }}
        />
      ))}
      {ProjectList.map(({ img }) => (
        <Project img={img} />
      ))}
    </div>
  );
};
