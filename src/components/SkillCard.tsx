import React from "react";

interface Props {
    skill: string;
    index: number;
}

const SkillCard = React.memo(function SkillCard({
    skill,
    index,
}: Props) {
    return (
        <div className="skill">
            <span>
                {String(index + 1).padStart(2, "0")}
            </span>

            <p>{skill}</p>
        </div>
    );
});

export default SkillCard;