import Icon from "./Icon";

interface Props {
    href: string;
    icon: "github" | "linkedin";
    children: React.ReactNode;
}

export default function SocialLink({
    href,
    icon,
    children,
}: Props) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
        >
            <Icon name={icon} />

            {children}
        </a>
    );
}