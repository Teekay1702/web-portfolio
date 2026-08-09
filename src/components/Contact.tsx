import Icon from './Icon';
import SocialLink from './SocialLink';
import { PROFILE } from '../constants/profile';
import '../style.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-copy">
        <div className="section-label">04 / CONTACT</div>
        <h2>Let’s build something<br/><em>meaningful.</em></h2>
        <p>I’m available for software development opportunities, collaborations, and Job opportunities.</p>
        <a className="email" href={`mailto:${PROFILE.email}`}>Email me <Icon name="arrow" /></a>
        <SocialLink />
      </div>

      {/* Update personal contact information in src/constants/profile.ts. */}
      <aside className="contact-details contact-panel" aria-label="Contact details">
        <p className="contact-details-title">CONTACT INFORMATION</p>
        <div className="contact-item">
          <span>EMAIL</span>
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </div>
        <div className="contact-item">
          <span>PHONE</span>
          <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}>{PROFILE.phone}</a>
        </div>
        <div className="contact-item">
          <span>LOCATION</span>
          <p>{PROFILE.location}</p>
        </div>
        <div className="contact-item">
          <span>LINKEDIN</span>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">View profile <Icon name="arrow" size={16} /></a>
        </div>
      </aside>
    </section>
  );
}
