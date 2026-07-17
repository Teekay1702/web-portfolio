import Logo from "./Logo";
import Button from "./Button";
import Icon from "./Icon";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";
import SocialLink from "./SocialLink";

import { PROFILE } from "../constants/profile";

import useScroll from "../hooks/useScroll";

export default function Footer() {
  const scroll = useScroll();

  return (
    <footer>

      <div className="footer-top">

        <Logo small />

        <FooterNav
          onNavigate={scroll}
        />

      </div>

      <div className="footer-middle">

        <div>

          <h3>
            Let's build something
            amazing together.
          </h3>

          <p>
            I'm always interested in
            exciting software projects,
            full-time opportunities,
            and freelance work.
          </p>

        </div>

        <div className="footer-socials">

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

      <div className="footer-bottom">

        <Copyright />

        <Button
          variant="secondary"
          onClick={() => scroll("top")}
          icon={<Icon name="arrow" />}
        >
          Back to Top
        </Button>

      </div>

    </footer>
  );
}