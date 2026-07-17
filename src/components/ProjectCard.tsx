import React from "react";

import type { Project } from "../types/project";

import Icon from "./Icon";
import TextButton from "./TextButton";

interface Props {
    project: Project;
}

const ProjectCard = React.memo(function ProjectCard({
    project,
}: Props) {
    return (
        <article
            className={`project ${project.accent}`}
        >
            <div className="project-visual">

                <span>{project.num}</span>

                <Icon
                    name="code"
                    size={54}
                />

                <div className="window">

                    <i />

                    <i />

                    <i />

                    <b />

                    <b />

                    <b />

                </div>

            </div>

            <div className="project-info">

                <div className="project-meta">

                    {project.type}

                    <span>{project.num}</span>

                </div>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="tags">

                    {project.tags.map((tag) => (
                        <small key={tag}>
                            {tag}
                        </small>
                    ))}

                </div>

                <TextButton>
                    Project Overview
                </TextButton>

            </div>
        </article>
    );
});

export default ProjectCard;