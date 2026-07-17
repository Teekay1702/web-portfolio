import { useMemo } from "react";

import Section from "./Section";
import ExperienceCard from "./ExperienceCard";

import { roles } from "../data/roles";

export default function Experience() {
    const renderedRoles = useMemo(
        () =>
            roles.map((role, index) => (
                <ExperienceCard
                    key={`${role.org}-${index}`}
                    role={role}
                    index={index}
                />
            )),
        []
    );

    return (
        <Section
            id="experience"
            label="03 / EXPERIENCE"
        >
            <div className="experience-wrap">

                <div className="experience-heading">

                    <h2>
                        Learning by
                        <br />
                        <em>building.</em>
                    </h2>

                    <p>
                        Every opportunity has strengthened
                        my ability to design software,
                        solve problems and collaborate
                        with development teams.
                    </p>

                </div>

                <div className="roles">

                    {renderedRoles}

                </div>

            </div>
        </Section>
    );
}