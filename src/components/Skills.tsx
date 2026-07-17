import { useMemo } from "react";

import SkillCard from "./SkillCard";

import { skills } from "../data/skills";

export default function Skills() {
    const renderedSkills = useMemo(
        () =>
            skills.map((skill, index) => (
                <SkillCard
                    key={skill}
                    skill={skill}
                    index={index}
                />
            )),
        []
    );

    return (
        <section className="skills">

            <div>

                <p className="section-label">
                    TOOLKIT
                </p>

                <h2>
                    Technologies
                    <br />
                    I work <em>with.</em>
                </h2>

                <p>
                    My primary stack covers
                    full-stack web development,
                    mobile development and cloud
                    technologies.
                </p>

            </div>

            <div className="skill-grid">

                {renderedSkills}

            </div>

        </section>
    );
}