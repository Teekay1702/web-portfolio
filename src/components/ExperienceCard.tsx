import React from "react";

import type { Role } from "../types/role";

interface Props {
    role: Role;
    index: number;
}

const ExperienceCard = React.memo(function ExperienceCard({
    role,
    index,
}: Props) {
    return (
        <article className="role">
            <div className="role-date">
                {role.date}
            </div>

            <div className="role-content">
                <h3>{role.role}</h3>

                <h4>{role.org}</h4>

                <ul>
                    {role.points.map((point) => (
                        <li key={point}>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

            <span className="role-number">
                {String(index + 1).padStart(2, "0")}
            </span>
        </article>
    );
});

export default ExperienceCard;