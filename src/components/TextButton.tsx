import Icon from "./Icon";

interface Props {
    children: React.ReactNode;
}

export default function TextButton({
    children,
}: Props) {
    return (
        <button
            className="project-link"
            type="button"
        >
            {children}

            <Icon name="arrow" />
        </button>
    );
}