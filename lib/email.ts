import nodemailer from 'nodemailer';

// Configure Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD 
  }
});

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }>;
}

/**
 * Send an email via Gmail SMTP
 */
export async function sendEmail(options: SendEmailOptions): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: `"Juggernaut Industries" <${process.env.CONTACT_EMAIL}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      attachments: options.attachments,
    });

    console.log(`Email sent successfully to ${options.to}`);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

/**
 * Build the JIL-branded email HTML
 */
function buildEmailHtml({
  title,
  body,
}: {
  title: string;
  body: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin:0; padding:0; background-color:#F5F1EB; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F1EB; padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 24px rgba(13,27,42,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0D1B2A 0%, #1B3A4B 100%); padding:32px 40px; text-align:center;">
              <h1 style="margin:0; font-size:22px; font-weight:700; color:#F5F1EB; letter-spacing:0.05em;">
                JUGGERNAUT INDUSTRIES
              </h1>
              <p style="margin:4px 0 0; font-size:12px; color:#C8A45A; letter-spacing:0.15em; text-transform:uppercase;">
                Building Africa's Future
              </p>
            </td>
          </tr>

          <!-- Gold accent line -->
          <tr>
            <td style="height:4px; background:linear-gradient(90deg, #C8A45A, #E8D48B, #C8A45A);"></td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding:32px 40px 0;">
              <h2 style="margin:0; font-size:20px; font-weight:600; color:#0D1B2A;">
                ${title}
              </h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:16px 40px 32px; font-size:14px; line-height:1.7; color:#3A5A6E;">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0D1B2A; padding:24px 40px; text-align:center;">
              <p style="margin:0 0 4px; font-size:12px; color:#C8A45A; letter-spacing:0.1em; text-transform:uppercase;">
                Juggernaut Industries Limited
              </p>
              <p style="margin:0; font-size:11px; color:#6B8CA4;">
                3 Wiser Estate, Off Regent School Road, Mabushi – Abuja, Nigeria
              </p>
              <p style="margin:4px 0 0; font-size:11px; color:#6B8CA4;">
                +234 7052440133 &nbsp;|&nbsp; abdurrahmanidris235@gmail.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Send a contact form submission to admin
 */
export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}): Promise<boolean> {
  const body = `
    <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A; width:140px;">Name</td>
        <td style="color:#3A5A6E;">${data.name}</td>
      </tr>
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Email</td>
        <td style="color:#3A5A6E;"><a href="mailto:${data.email}" style="color:#C8A45A;">${data.email}</a></td>
      </tr>
      ${data.phone ? `<tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Phone</td>
        <td style="color:#3A5A6E;">${data.phone}</td>
      </tr>` : ''}
      ${data.company ? `<tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Company</td>
        <td style="color:#3A5A6E;">${data.company}</td>
      </tr>` : ''}
      ${data.service ? `<tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Service Interest</td>
        <td style="color:#3A5A6E;">${data.service}</td>
      </tr>` : ''}
    </table>

    <div style="margin-top:20px; padding:16px; background-color:#F5F1EB; border-radius:8px; border-left:3px solid #C8A45A;">
      <p style="margin:0 0 8px; font-weight:600; color:#0D1B2A; font-size:13px; text-transform:uppercase; letter-spacing:0.05em;">Message</p>
      <p style="margin:0; color:#3A5A6E; white-space:pre-wrap;">${data.message}</p>
    </div>

    <p style="margin-top:20px; font-size:12px; color:#6B8CA4; font-style:italic;">
      This message was sent from the Juggernaut Industries website contact form.
    </p>
  `;

  return sendEmail({
    to: 'info@juggernautind.com',
    subject: `New Contact Inquiry from ${data.name}`,
    html: buildEmailHtml({ title: 'New Contact Form Submission', body }),
  });
}

/**
 * Send a career application to admin
 */
export async function sendCareerApplicationEmail(
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    education: string;
    position: string;
    recentRole: string;
    message: string;
  },
  cvAttachment?: { filename: string; content: Buffer; contentType: string }
): Promise<boolean> {
  const positionLabels: Record<string, string> = {
    'mining-engineer': 'Mining Engineer',
    'agricultural-specialist': 'Agricultural Specialist',
    'project-manager': 'Project Manager',
    'solar-technician': 'Renewable Energy Technician',
    other: 'Other',
  };

  const educationLabels: Record<string, string> = {
    'high-school': 'High School',
    diploma: 'Diploma',
    bachelors: "Bachelor's Degree",
    masters: "Master's Degree",
    phd: 'PhD/Doctorate',
  };

  const genderLabels: Record<string, string> = {
    male: 'Male',
    female: 'Female',
    other: 'Prefer not to say',
  };

  const body = `
    <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A; width:160px;">Full Name</td>
        <td style="color:#3A5A6E;">${data.firstName} ${data.lastName}</td>
      </tr>
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Email</td>
        <td style="color:#3A5A6E;"><a href="mailto:${data.email}" style="color:#C8A45A;">${data.email}</a></td>
      </tr>
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Phone</td>
        <td style="color:#3A5A6E;">${data.phone}</td>
      </tr>
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Address</td>
        <td style="color:#3A5A6E;">${data.address}</td>
      </tr>
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Gender</td>
        <td style="color:#3A5A6E;">${genderLabels[data.gender] || data.gender}</td>
      </tr>
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Education</td>
        <td style="color:#3A5A6E;">${educationLabels[data.education] || data.education}</td>
      </tr>
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Position Applied</td>
        <td style="color:#3A5A6E; font-weight:600;">${positionLabels[data.position] || data.position}</td>
      </tr>
      <tr style="border-bottom:1px solid #E8E4DE;">
        <td style="font-weight:600; color:#0D1B2A;">Recent Role</td>
        <td style="color:#3A5A6E;">${data.recentRole}</td>
      </tr>
    </table>

    <div style="margin-top:20px; padding:16px; background-color:#F5F1EB; border-radius:8px; border-left:3px solid #C8A45A;">
      <p style="margin:0 0 8px; font-weight:600; color:#0D1B2A; font-size:13px; text-transform:uppercase; letter-spacing:0.05em;">Cover Letter / Message</p>
      <p style="margin:0; color:#3A5A6E; white-space:pre-wrap;">${data.message}</p>
    </div>

    ${cvAttachment ? `<p style="margin-top:16px; font-size:13px; color:#0D1B2A;">📎 <strong>CV/Resume attached:</strong> ${cvAttachment.filename}</p>` : ''}

    <p style="margin-top:20px; font-size:12px; color:#6B8CA4; font-style:italic;">
      This application was submitted from the Juggernaut Industries website careers page.
    </p>
  `;

  return sendEmail({
    to: 'info@juggernautind.com',
    subject: `Career Application: ${positionLabels[data.position] || data.position} – ${data.firstName} ${data.lastName}`,
    html: buildEmailHtml({ title: 'New Career Application', body }),
    attachments: cvAttachment ? [cvAttachment] : undefined,
  });
}

/**
 * Send a confirmation email to the user requesting contact
 */
export async function sendContactConfirmationEmail(email: string, name: string): Promise<boolean> {
  const body = `
    <p>Dear ${name},</p>
    <p>Thank you for reaching out to Juggernaut Industries Limited.</p>
    <p>We have received your inquiry and our team is currently reviewing it. One of our representatives will get back to you shortly.</p>
    <p>In the meantime, feel free to explore <a href="https://juggernautind.com/services" style="color:#C8A45A;">our services</a> and <a href="https://juggernautind.com/projects" style="color:#C8A45A;">our projects</a>.</p>
    <p>Best regards,<br>The Juggernaut Industries Team</p>
  `;

  return sendEmail({
    to: email,
    subject: 'Thank you for contacting Juggernaut Industries',
    html: buildEmailHtml({ title: 'We Have Received Your Inquiry', body }),
  });
}

/**
 * Send a confirmation email to the career applicant
 */
export async function sendCareerConfirmationEmail(email: string, firstName: string, position: string): Promise<boolean> {
  const body = `
    <p>Dear ${firstName},</p>
    <p>Thank you for applying for the <strong>${position}</strong> position at Juggernaut Industries Limited.</p>
    <p>We have successfully received your application. Our recruitment team will review your profile and qualifications to see if they match our current needs. If your application is shortlisted, we will contact you regarding the next steps in the hiring process.</p>
    <p>We appreciate your interest in joining our team and wish you the best in your career pursuits.</p>
    <p>Best regards,<br>The Juggernaut Industries Recruitment Team</p>
  `;

  return sendEmail({
    to: email,
    subject: `Application Received: ${position} at Juggernaut Industries`,
    html: buildEmailHtml({ title: 'Application Received', body }),
  });
}

/**
 * Send a newsletter subscription confirmation and admin notification
 */
export async function sendNewsletterSubscriptionEmail(email: string): Promise<boolean> {
  // 1. Send confirmation to subscriber
  const subscriberBody = `
    <p>Dear Subscriber,</p>
    <p>Thank you for subscribing to the Juggernaut Industries newsletter!</p>
    <p>You'll now be among the first to receive updates on our latest projects, industry insights, and company news.</p>
    <p>If you didn't mean to subscribe, you can ignore this email or contact us to be removed from the list.</p>
    <p>Best regards,<br>The Juggernaut Industries Team</p>
  `;

  const subscriberSent = await sendEmail({
    to: email,
    subject: 'Welcome to Juggernaut Industries Newsletter',
    html: buildEmailHtml({ title: 'Subscription Confirmed', body: subscriberBody }),
  });

  // 2. Send notification to admin
  const adminBody = `
    <p>A new user has subscribed to the newsletter:</p>
    <p><strong>Email:</strong> ${email}</p>
    <p>This user subscribed via the CTA section on the website.</p>
  `;

  await sendEmail({
    to: 'info@juggernautind.com',
    subject: `New Newsletter Subscriber: ${email}`,
    html: buildEmailHtml({ title: 'New Newsletter Subscription', body: adminBody }),
  });

  return subscriberSent;
}

