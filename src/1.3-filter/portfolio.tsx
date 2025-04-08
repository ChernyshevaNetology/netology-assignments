import {useState} from "react";
import {Toolbar} from "./toolbar.tsx";
import {ProjectList} from "./projectList.tsx";
import {Project} from './project.tsx'

export const Portfolio = ({selected, activeFilterSelect}) => {
    const [activeFilter, setActiveFilter] = useState(activeFilter);
    const filters = [
        {button: "All"},
        {button: "Websites"},
        {button: "Flayers"},
        {button: "Business Cards"},
    ];
    const activeFilterSelect = () => {
        setActiveFilter(activeFilter);
    };
    return (
        <>
            {filters.map((button) => <Toolbar
                title={button.button}
                selected="All"
                activeFilterSelect={(filter: any) => {console.log(filter) />
                )
        </>
                )
                }