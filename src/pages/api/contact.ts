import type { NextApiRequest, NextApiResponse } from 'next';

type ContactResponse = { message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<ContactResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body ?? {};
  const senderName = typeof name === 'string' ? name.trim() : '';
  const senderEmail = typeof email === 'string' ? email.trim() : '';
  const senderMessage = typeof message === 'string' ? message.trim() : '';

  if (!senderName || !senderEmail || !senderMessage) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>';

  if (!resendApiKey || !toEmail) {
    return res.status(500).json({ message: 'Email service is not configured.' });
  }

  try {
    const sendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: senderEmail,
        subject: `Portfolio inquiry from ${senderName}`,
        text: [
          `Name: ${senderName}`,
          `Email: ${senderEmail}`,
          '',
          'Message:',
          senderMessage,
        ].join('\n'),
      }),
    });

    if (!sendResponse.ok) {
      return res.status(502).json({ message: 'Failed to send email.' });
    }

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch {
    return res.status(500).json({ message: 'Unexpected error while sending email.' });
  }
}
