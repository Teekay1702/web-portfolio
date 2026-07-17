import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact"
    >
      <ContactInfo />

      <ContactForm />
    </section>
  );
}