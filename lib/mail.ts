import nodemailer from "nodemailer";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user) return null;

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendMail(options: {
  subject: string;
  html: string;
  to?: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer }[];
}) {
  const transporter = getTransporter();
  if (!transporter) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS."
    );
  }

  await transporter.sendMail({
    from: process.env.MAIL_FROM || "GQS Website <noreply@gqs.com>",
    to: options.to || process.env.MAIL_TO || "info@gqs.com",
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
    attachments: options.attachments,
  });
}
