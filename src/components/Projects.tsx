import { useMemo } from "react";

import Section from "./Section";
import ProjectCard from "./ProjectCard";

import { projects } from "../data/projects";

export default function Projects() {
    const renderedProjects = useMemo(
        () =>
            projects.map((project) => (
                <ProjectCard
                    key={project.num}
                    project={project}
                />
            )),
        []
    );

    return (
        <Section
            id="work"
            label="02 / SELECTED WORK"
        >
            <div className="section-head">

                <p>
                    A few projects where design,
                    engineering and purpose come
                    together.
                </p>

            </div>

            <div className="project-list">

                {renderedProjects}

            </div>
        </Section>
    );
}