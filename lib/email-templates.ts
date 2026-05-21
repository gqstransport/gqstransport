import { escapeHtml } from "./mail";

const BRAND = {
  navy: "#0c1f3c",
  navyLight: "#1f3a5f",
  gold: "#e2b844",
  cream: "#faf6ed",
  text: "#374151",
  muted: "#6b7280",
  border: "#e5e7eb",
};

type LayoutOptions = {
  preheader: string;
  badge: string;
  title: string;
  subtitle?: string;
  body: string;
  footerNote?: string;
};

function emailLayout({ preheader, badge, title, subtitle, body, footerNote }: LayoutOptions): string {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${escapeHtml(title)}</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${BRAND.cream};font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.cream};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND.navy} 0%,${BRAND.navyLight} 100%);border-radius:12px 12px 0 0;padding:28px 32px;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <div style="display:inline-block;background-color:${BRAND.gold};color:${BRAND.navy};font-size:10px;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;padding:6px 14px;border-radius:4px;margin-bottom:16px;">${escapeHtml(badge)}</div>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <h1 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:0.02em;line-height:1.3;">Gulf Quality Structure</h1>
                    <p style="margin:0;font-size:11px;font-weight:600;color:${BRAND.gold};letter-spacing:0.25em;text-transform:uppercase;">Heavy Transport &amp; Industrial Logistics</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Gold accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,${BRAND.navy} 0%,${BRAND.gold} 50%,${BRAND.navy} 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <!-- Body card -->
          <tr>
            <td style="background-color:#ffffff;padding:36px 32px 28px;border-left:1px solid ${BRAND.border};border-right:1px solid ${BRAND.border};">
              <h2 style="margin:0 0 8px;font-size:20px;font-weight:800;color:${BRAND.navy};line-height:1.35;">${escapeHtml(title)}</h2>
              ${subtitle ? `<p style="margin:0 0 24px;font-size:14px;color:${BRAND.muted};line-height:1.6;">${escapeHtml(subtitle)}</p>` : ""}
              ${body}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:${BRAND.navy};border-radius:0 0 12px 12px;padding:24px 32px;text-align:center;border:1px solid ${BRAND.navy};">
              <p style="margin:0 0 8px;font-size:12px;color:rgba(255,255,255,0.85);line-height:1.6;">
                <strong style="color:${BRAND.gold};">GQS</strong> — Dammam, Kingdom of Saudi Arabia
              </p>
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.5);line-height:1.5;">
                ${footerNote ? `${escapeHtml(footerNote)}<br />` : ""}
                &copy; ${year} Gulf Quality Structure. All rights reserved.
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

function fieldRow(label: string, value: string, highlight = false): string {
  const bg = highlight ? BRAND.cream : "#f9fafb";
  return `
    <tr>
      <td style="padding:0 0 10px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${bg};border-radius:8px;border:1px solid ${BRAND.border};">
          <tr>
            <td style="padding:14px 18px;">
              <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.12em;">${escapeHtml(label)}</p>
              <p style="margin:0;font-size:15px;font-weight:600;color:${BRAND.navy};line-height:1.5;word-break:break-word;">${value}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function messageBlock(label: string, text: string): string {
  return `
    <tr>
      <td style="padding:4px 0 0;">
        <p style="margin:0 0 10px;font-size:10px;font-weight:700;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.12em;">${escapeHtml(label)}</p>
        <div style="background-color:${BRAND.cream};border-left:4px solid ${BRAND.gold};border-radius:0 8px 8px 0;padding:18px 20px;">
          <p style="margin:0;font-size:15px;color:${BRAND.text};line-height:1.7;">${text}</p>
        </div>
      </td>
    </tr>`;
}

function fieldsTable(rows: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}</table>`;
}

function linkValue(email: string): string {
  const safe = escapeHtml(email);
  return `<a href="mailto:${safe}" style="color:${BRAND.navyLight};text-decoration:none;font-weight:600;">${safe}</a>`;
}

// ——— Admin notifications ———

export function contactAdminEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}): string {
  const rows = [
    fieldRow("Full name", escapeHtml(data.name), true),
    fieldRow("Email", linkValue(data.email)),
    ...(data.phone ? [fieldRow("Phone", escapeHtml(data.phone))] : []),
    fieldRow("Subject", escapeHtml(data.subject)),
  ].join("");

  const body = `${fieldsTable(rows)}${messageBlock("Message", escapeHtml(data.message).replace(/\n/g, "<br />"))}`;

  return emailLayout({
    preheader: `New contact from ${data.name}: ${data.subject}`,
    badge: "Contact Form",
    title: "New contact message",
    subtitle: "A visitor submitted the contact form on gqsksa.com. Reply directly to this email.",
    body,
    footerNote: "Internal notification — do not forward customer data without consent.",
  });
}

export function quoteAdminEmail(data: {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service: string;
  equipment?: string;
  pickupLocation: string;
  dropoffLocation: string;
  schedule: string;
  notes?: string;
  attachmentName?: string;
}): string {
  const rows = [
    fieldRow("Contact", escapeHtml(data.name), true),
    fieldRow("Company", escapeHtml(data.company)),
    fieldRow("Email", linkValue(data.email)),
    ...(data.phone ? [fieldRow("Phone", escapeHtml(data.phone))] : []),
    fieldRow("Service required", escapeHtml(data.service), true),
    ...(data.equipment ? [fieldRow("Equipment", escapeHtml(data.equipment))] : []),
    fieldRow("Pickup location", escapeHtml(data.pickupLocation)),
    fieldRow("Drop-off location", escapeHtml(data.dropoffLocation)),
    fieldRow("Preferred schedule", escapeHtml(data.schedule)),
    ...(data.attachmentName
      ? [fieldRow("Attachment", escapeHtml(data.attachmentName))]
      : []),
  ].join("");

  const notesBlock = data.notes
    ? messageBlock("Additional notes", escapeHtml(data.notes).replace(/\n/g, "<br />"))
    : "";

  const body = `${fieldsTable(rows)}${notesBlock}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
      <tr>
        <td align="center" style="padding:16px;background-color:${BRAND.navy};border-radius:8px;">
          <p style="margin:0;font-size:12px;font-weight:700;color:${BRAND.gold};letter-spacing:0.1em;text-transform:uppercase;">Action required</p>
          <p style="margin:8px 0 0;font-size:13px;color:#ffffff;line-height:1.5;">Please review and respond to this quote request within 1 business day.</p>
        </td>
      </tr>
    </table>`;

  return emailLayout({
    preheader: `Quote request from ${data.company} — ${data.service}`,
    badge: "Quote Request",
    title: "New quote request",
    subtitle: `${data.company} requested pricing for ${data.service}.`,
    body,
    footerNote: "Quote pipeline notification",
  });
}

export function newsletterAdminEmail(email: string): string {
  const body = `${fieldsTable(fieldRow("Subscriber email", linkValue(email), true))}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:8px;">
      <tr>
        <td style="padding:14px 18px;background-color:#ecfdf5;border-radius:8px;border:1px solid #a7f3d0;">
          <p style="margin:0;font-size:13px;color:#065f46;line-height:1.5;">
            <strong>Source:</strong> Website footer newsletter form
          </p>
        </td>
      </tr>
    </table>`;

  return emailLayout({
    preheader: `New newsletter subscriber: ${email}`,
    badge: "Newsletter",
    title: "New subscriber",
    subtitle: "Someone joined the GQS mailing list from the website.",
    body,
    footerNote: "Marketing list notification",
  });
}

// ——— Subscriber confirmation ———

export function newsletterWelcomeEmail(email: string): string {
  const safeEmail = escapeHtml(email);
  const body = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding:8px 0 28px;">
          <div style="width:64px;height:64px;background:linear-gradient(135deg,${BRAND.gold} 0%,#f5d76e 100%);border-radius:50%;line-height:64px;font-size:28px;text-align:center;">✓</div>
        </td>
      </tr>
      <tr>
        <td style="padding:0 0 20px;text-align:center;">
          <p style="margin:0;font-size:16px;color:${BRAND.text};line-height:1.7;">
            Thank you for subscribing. You will receive updates on <strong style="color:${BRAND.navy};">heavy transport routes</strong>, machinery availability, and project news from Gulf Quality Structure.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 0 16px;">
          ${fieldsTable(fieldRow("Subscribed as", safeEmail))}
        </td>
      </tr>
      <tr>
        <td style="padding:8px 0 0;text-align:center;">
          <p style="margin:0;font-size:13px;color:${BRAND.muted};line-height:1.6;">
            If you did not request this subscription, you can safely ignore this email.
          </p>
        </td>
      </tr>
    </table>`;

  return emailLayout({
    preheader: "You're subscribed to GQS updates",
    badge: "Welcome",
    title: "You're on the list",
    subtitle: "Industrial insights & fleet updates, delivered to your inbox.",
    body,
    footerNote: "You received this because you subscribed at gqsksa.com",
  });
}
