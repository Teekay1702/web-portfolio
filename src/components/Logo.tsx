import { PROFILE } from "../constants/profile";

interface Props {
    small?: boolean;
}

export default function Logo({
    small = false,
}: Props) {
    return (
        <div
            className={`logo ${small ? "small" : ""
                }`}
        >
            <div className="logo-circle">
                {PROFILE.initials}
            </div>

            <div>

                <strong>
                    {PROFILE.name}
                </strong>

                {!small && (
                    <p>
                        Software Developer
                    </p>
                )}

            </div>

        </div>
    );
}