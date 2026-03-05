import { FormEvent, useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = Object.fromEntries(formData.entries());

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    setStatus(response.ok ? 'Message sent successfully.' : 'Unable to send message.');
    if (response.ok) event.currentTarget.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title">Contact</h2>
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div className="card space-y-3">
          <p><strong>Email:</strong> <a className="text-primary underline" href="mailto:hellorohan02@gmail.com">hellorohan02@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 88267 12033</p>
          <p><strong>Location:</strong> New Delhi, India</p>
          <p><strong>LinkedIn:</strong> <a className="text-primary underline" href="https://www.linkedin.com/in/rohan-gupta-51b16615a/" target="_blank" rel="noreferrer">linkedin.com/in/rohan-gupta-51b16615a</a></p>
          <p><strong>GitHub:</strong> <a className="text-primary underline" href="https://github.com/Rohan1572" target="_blank" rel="noreferrer">github.com/Rohan1572</a></p>
        </div>
        <form onSubmit={handleSubmit} className="card space-y-4">
          <input name="name" placeholder="Name" required className="input" />
          <input name="email" type="email" placeholder="Email" required className="input" />
          <textarea name="message" placeholder="Message" rows={5} required className="input" />
          <button className="btn-primary" type="submit">Send Message</button>
          {status && <p className="text-sm text-accent">{status}</p>}
        </form>
      </div>
    </section>
  );
}
