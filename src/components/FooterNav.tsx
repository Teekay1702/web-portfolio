import { NAVIGATION } from "../constants/navigation";

interface Props {
    onNavigate: (section: string) => void;
}

export default function FooterNav({
    onNavigate,
}: Props) {
    return (
        <nav className="footer-nav">
            {NAVIGATION.map((item) => (
                <button
                    key={item}
                    type="button"
                    onClick={() => onNavigate(item)}
                >
                    {item}
                </button>
            ))}
        </nav>
    );
}