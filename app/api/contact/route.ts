import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail } from "@/lib/mail";
import { contactAdminEmail } from "@/lib/email-templates";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  subject: z.string().min(1).max(300),
  message: z.string().min(1).max(10000),
  phone: z.string().max(50).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message, phone } = parsed.data;

    await sendMail({
      subject: `[GQS Contact] ${subject}`,
      replyTo: email,
      html: contactAdminEmail({ name, email, subject, message, phone }),
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact email error:", error);
    const message = error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
