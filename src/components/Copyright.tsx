import { PROFILE } from "../constants/profile";

export default function Copyright() {
    const year = new Date().getFullYear();

    return (
        <p className="copyright">
            © {year} · {PROFILE.name}
            <br />
            Crafted with React + TypeScript + Vite
        </p>
    );
}