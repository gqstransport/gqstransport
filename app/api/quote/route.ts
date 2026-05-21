import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail } from "@/lib/mail";
import { quoteAdminEmail } from "@/lib/email-templates";

const ALLOWED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".webp"];
const MAX_FILE_BYTES = 10 * 1024 * 1024;

const quoteSchema = z.object({
  name: z.string().min(1).max(200),
  company: z.string().min(1).max(200),
  email: z.string().email().max(200),
  phone: z.string().max(50).optional(),
  service: z.string().min(1).max(200),
  equipment: z.string().max(500).optional(),
  pickupLocation: z.string().min(1).max(300),
  dropoffLocation: z.string().min(1).max(300),
  schedule: z.string().min(1).max(500),
  notes: z.string().max(5000).optional(),
});

function getExtension(filename: string): string {
  const i = filename.lastIndexOf(".");
  return i >= 0 ? filename.slice(i).toLowerCase() : "";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const raw = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
      service: String(formData.get("service") ?? ""),
      equipment: formData.get("equipment") ? String(formData.get("equipment")) : undefined,
      pickupLocation: String(formData.get("pickupLocation") ?? ""),
      dropoffLocation: String(formData.get("dropoffLocation") ?? ""),
      schedule: String(formData.get("schedule") ?? ""),
      notes: formData.get("notes") ? String(formData.get("notes")) : undefined,
    };

    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const fileField = formData.get("attachment");
    let attachments: { filename: string; content: Buffer }[] | undefined;

    if (fileField instanceof File && fileField.size > 0) {
      const ext = getExtension(fileField.name);
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return NextResponse.json(
          { error: "Only PDF, JPG, and PNG files are allowed" },
          { status: 400 }
        );
      }
      if (fileField.size > MAX_FILE_BYTES) {
        return NextResponse.json({ error: "File must be under 10MB" }, { status: 400 });
      }
      const buffer = Buffer.from(await fileField.arrayBuffer());
      attachments = [{ filename: fileField.name, content: buffer }];
    }

    await sendMail({
      subject: `[GQS Quote Request] ${data.company} – ${data.service}`,
      replyTo: data.email,
      html: quoteAdminEmail({
        ...data,
        attachmentName: attachments?.[0]?.filename,
      }),
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
    });
  } catch (error) {
    console.error("Quote email error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to submit quote request";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
