import { PROFILE } from "../constants/profile";

import SocialLink from "./SocialLink";
import Icon from "./Icon";

export default function ContactInfo() {
  return (
    <div className="contact-copy">

      <div className="section-label">
        04 / CONTACT
      </div>

      <h2>

        Have an idea?

        <br />

        <em>Let's build it together.</em>

      </h2>

      <p>
        I'm always interested in new
        opportunities, freelance work,
        collaborations and software
        projects.
      </p>

      <a
        href={PROFILE.mailto}
        className="email"
      >
        {PROFILE.email}

        <Icon name="arrow" />
      </a>

      <div className="socials">

        <SocialLink
          href={PROFILE.github}
          icon="github"
        >
          GitHub
        </SocialLink>

        <SocialLink
          href={PROFILE.linkedin}
          icon="linkedin"
        >
          LinkedIn
        </SocialLink>

      </div>

    </div>
  );
}