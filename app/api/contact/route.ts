import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        New Contact Form Submission
        --------------------------
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        Best regards,
        Olatunji Ademola
        Data & BI Analyst
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background: linear-gradient(to right, #b45309, #7e22ce); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 20px; background-color: #ffffff;">
            <p style="margin-bottom: 15px;"><strong style="color: #4b5563;">Name:</strong> ${name}</p>
            <p style="margin-bottom: 15px;"><strong style="color: #4b5563;">Email:</strong> ${email}</p>
            <p style="margin-bottom: 15px;"><strong style="color: #4b5563;">Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <p style="margin: 0; color: #374151;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280;">Best regards,</p>
              <p style="margin: 5px 0 0 0; font-weight: bold; color: #111827;">Olatunji Ademola</p>
              <p style="margin: 0; color: #6b7280;">Data & BI Analyst</p>
            </div>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">This is an automated message from your portfolio website contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
} 