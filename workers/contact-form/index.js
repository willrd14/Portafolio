export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    try {
      const { name, email, subject, message } = await request.json()

      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      }

      const emailBody = `
New contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject || 'Not specified'}

Message:
${message}
      `.trim()

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [env.CONTACT_EMAIL || 'wtech-support@w-tech.uk'],
          subject: `[Portfolio] ${subject || 'New contact'} from ${name}`,
          text: emailBody,
          reply_to: email,
        }),
      })

      if (!resendResponse.ok) {
        const error = await resendResponse.text()
        console.error('Resend error:', error)
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        })
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
    } catch (error) {
      console.error('Contact form error:', error)
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  },
}
