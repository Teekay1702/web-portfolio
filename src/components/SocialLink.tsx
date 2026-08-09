import Icon from './Icon';
import { PROFILE } from '../constants/profile';

export default function SocialLink() {
    return (
        <div className="socials">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
                <Icon name="github" /> GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" /> LinkedIn
            </a>
        </div>
    );
}
