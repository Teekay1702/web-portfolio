import { NAVIGATION } from "../constants/navigation";
import { PROFILE } from "../constants/profile";

interface MobileNavProps {
    open: boolean;
    onNavigate: (section: string) => void;
}

export default function MobileNav({
    open,
    onNavigate,
}: MobileNavProps) {
    return (
        <div
            id="mobile-navigation"
            className={`mobile-nav ${open ? "show" : ""}`}
        >
            {NAVIGATION.map((item) => (
                <button
                    key={item}
                    type="button"
                    onClick={() => onNavigate(item)}
                >
                    {item}
                </button>
            ))}

            <a href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
            </a>
        </div>
    );
}