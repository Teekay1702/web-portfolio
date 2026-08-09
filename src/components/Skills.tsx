const technicalSkills = [
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

const softSkills = [
    'Problem Solving',
    'Teamwork',
    'Communication',
    'Adaptability',
    'Time Management',
    'Collaboration',
    'Attention to Detail',
    'Continuous Learning'
];

export default function Skills() {
    return (
        <section className="skills">
            {/* Technical Skills */}
            <div>
                <p className="section-label">TOOLKIT</p>
                <h2>Technologies I<br />work <em>with.</em></h2>
            </div>
            <div className="skill-grid">
                {technicalSkills.map((skill, index) => (
                    <div className="skill" key={skill}>
                        <span>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        {skill}
                    </div>
                ))}
            </div>
            {/* Soft Skills */}
            <div className="soft-skills-heading">
                <p className="section-label">STRENGTHS</p>
                <h2>How I<br /><em>work.</em></h2>
            </div>
            <div className="skill-grid">
                {softSkills.map((skill, index) => (
                    <div className="skill" key={skill}>
                        <span>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}