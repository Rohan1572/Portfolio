import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Let&apos;s Connect</h2>
      <p>Open to frontend and product engineering opportunities, collaborations, and impactful projects.</p>
      <form className={styles.form}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Tell me about the role or project" required />

        <button type="submit">Send Message</button>
      </form>
      <div className={styles.links}>
        <a href="mailto:hellorohan02@gmail.com">Email</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
