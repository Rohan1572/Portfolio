import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Let&apos;s Build Something Impactful</h2>
      <p>Open to frontend and fintech product engineering roles. Reach out for collaboration or opportunities.</p>
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
        <a href="mailto:rohan@example.com">Email</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
