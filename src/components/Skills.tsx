const skills = [
    'JavaScript',
    'TypeScript',
    'React + Vite',
    'Node.js',
    'C#',
    'Python',
    'Django',
    'Flutter',
    'Firebase',
    'Supabase',
    'Docker',
    'Git'
];

export default function Skills() {
    return <section className="skills">
        <div>
            <p className="section-label">TOOLKIT</p>
            <h2>Technologies I<br />work <em>with.</em></h2>
        </div>
        <div className="skill-grid">{skills.map((skill, index) =>
            <div className="skill" key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</div>)}
        </div>
    </section>
}
