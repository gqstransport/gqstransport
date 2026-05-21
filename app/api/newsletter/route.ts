import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail } from "@/lib/mail";
import { newsletterAdminEmail, newsletterWelcomeEmail } from "@/lib/email-templates";

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

    await sendMail({
      subject: "[GQS Newsletter] New subscriber",
      replyTo: email,
      html: newsletterAdminEmail(email),
    });

    try {
      await sendMail({
        to: email,
        subject: "You're subscribed to GQS updates",
        html: newsletterWelcomeEmail(email),
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
