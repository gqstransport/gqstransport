import { NextResponse } from "next/server";
import { z } from "zod";
import { escapeHtml, sendMail } from "@/lib/mail";

const newsletterSchema = z.object({
  email: z.string().email().max(200),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid email address", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email } = parsed.data;
    const safeEmail = escapeHtml(email);

    await sendMail({
      subject: "[GQS Newsletter] New subscriber",
      replyTo: email,
      html: `
        <h2>New newsletter subscription</h2>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p>Subscribed via the website footer.</p>
      `,
    });

    try {
      await sendMail({
        to: email,
        subject: "You're subscribed to GQS updates",
        html: `
          <h2>Thank you for subscribing</h2>
          <p>You will receive updates on heavy transport routes and machinery availability from Gulf Quality Structure.</p>
          <p style="color:#666;font-size:14px;">If you did not request this, you can ignore this email.</p>
        `,
      });
    } catch (confirmErr) {
      console.error("Newsletter confirmation email error:", confirmErr);
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully",
    });
  } catch (error) {
    console.error("Newsletter email error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to subscribe";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
