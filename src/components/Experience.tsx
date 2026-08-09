import Section from './Section';
import { roles } from '../data/roles';

export default function Experience() {
    return <Section id="experience" className="experience">
        <div className="section-label">03 / EXPERIENCE</div>
        <div className="experience-wrap">
            <h2>Learning by<br /><em>making.</em></h2>
            <div className="roles">{roles.map((role, index) =>
                <article className="role" key={role.org}>
                    <div className="role-date">{role.date}</div>
                    <div>
                        <h3>{role.role}</h3>
                        <h4>{role.org}</h4>
                        <ul>{role.points.map(point =>
                            <li key={point}>{point}</li>)}
                        </ul>
                    </div>
                    <span className="role-no">0{index + 1}</span>
                </article>)}
            </div>
        </div>
    </Section>
}
