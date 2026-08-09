import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
    return <Section id="work" className="work">
        <div className="section-head">
            <div className="section-label">02 / SELECTED WORK</div>
            <p>A few projects where design, engineering and purpose come together.</p>
        </div>
        <div className="project-list">{projects.map(project => <ProjectCard project={project} key={project.num} />)}</div>
    </Section>
}
