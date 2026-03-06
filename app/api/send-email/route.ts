import { NextRequest, NextResponse } from 'next/server';
import { 
  sendContactFormEmail, 
  sendCareerApplicationEmail, 
  sendContactConfirmationEmail, 
  sendCareerConfirmationEmail,
  sendNewsletterSubscriptionEmail
} from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';

    // ─── Career form (multipart/form-data with file upload) ───
    if (contentType.includes('multipart/form-data')) {
      // ... (rest of the career form logic remains the same)
      const formData = await request.formData();

      const firstName = formData.get('firstName') as string;
      const lastName = formData.get('lastName') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const address = formData.get('address') as string;
      const gender = formData.get('gender') as string;
      const education = formData.get('education') as string;
      const position = formData.get('position') as string;
      const recentRole = formData.get('recentRole') as string;
      const message = formData.get('message') as string;
      const cv = formData.get('cv') as File | null;

      // Validate required fields
      if (!firstName || !lastName || !email || !phone || !position || !message) {
        return NextResponse.json(
          { error: 'Missing required fields.' },
          { status: 400 }
        );
      }

      // Validate email format
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email format.' },
          { status: 400 }
        );
      }

      // Prepare CV attachment if present
      let cvAttachment: { filename: string; content: Buffer; contentType: string } | undefined;
      if (cv && cv.size > 0) {
        const buffer = Buffer.from(await cv.arrayBuffer());
        cvAttachment = {
          filename: cv.name,
          content: buffer,
          contentType: cv.type,
        };
      }

      const sent = await sendCareerApplicationEmail(
        { firstName, lastName, email, phone, address, gender, education, position, recentRole, message },
        cvAttachment
      );

      if (!sent) {
        return NextResponse.json(
          { error: 'Failed to send application. Please try again later.' },
          { status: 500 }
        );
      }

      // Send confirmation to applicant
      await sendCareerConfirmationEmail(email, firstName, position);

      return NextResponse.json(
        { success: true, message: 'Your application has been submitted successfully!' },
        { status: 200 }
      );
    }

    // ─── Contact or Newsletter form (JSON) ───
    const body = await request.json();
    const { name, email, phone, company, service, message, formType } = body;

    // Handle Newsletter Subscription
    if (formType === 'newsletter') {
      if (!email) {
        return NextResponse.json(
          { error: 'Email is required for subscription.' },
          { status: 400 }
        );
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email format.' },
          { status: 400 }
        );
      }

      const sent = await sendNewsletterSubscriptionEmail(email);

      if (!sent) {
        return NextResponse.json(
          { error: 'Failed to subscribe. Please try again later.' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: 'Thank you for subscribing to our newsletter!' },
        { status: 200 }
      );
    }

    // Handle Contact Form (Default)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    const sent = await sendContactFormEmail({ name, email, phone, company, service, message });

    if (!sent) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    // Send confirmation to user
    await sendContactConfirmationEmail(email, name);

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully! We\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

