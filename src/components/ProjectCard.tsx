import type { Project } from '../types/project';
import Icon from './Icon';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className={`project ${project.accent}`}>
            <div className="project-visual">
                <span>{project.num}</span>
                <Icon name="code" size={54} />
                {/* TODO: Replace this abstract visual with a project screenshot in src/assets when available. */}
                <div className="window"><i /><i /><i /><b /><b /><b /></div>
            </div>
            <div className="project-info">
                <div className="project-meta">{project.type}<span>{project.num}</span></div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tags">{project.tags.map(tag => <small key={tag}>{tag}</small>)}</div>
                {/* The project.link value is configured in src/data/projects.ts. */}
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    View project <Icon name="arrow" />
                </a>
            </div>
        </article>
    );
}
