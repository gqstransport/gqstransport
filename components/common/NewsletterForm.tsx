"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

function formatErrorMessage(data: unknown): string {
  if (data && typeof data === "object" && "error" in data) {
    const err = (data as { error: unknown }).error;
    if (typeof err === "string") return err;
  }
  return "Something went wrong. Please try again.";
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(formatErrorMessage(data));
        return;
      }
      setSuccess(true);
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <form className="flex gap-2" onSubmit={onSubmit} suppressHydrationWarning>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={loading}
          className="flex-1 bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors disabled:opacity-60"
          suppressHydrationWarning
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-white transition-all shadow-lg active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
          suppressHydrationWarning
        >
          {loading ? "Sending…" : "Subscribe"}
          <Send className="h-4 w-4" />
        </button>
      </form>
      {success && (
        <p className="text-sm text-[var(--color-accent-gold)] font-medium">
          Thanks — check your inbox to confirm your subscription.
        </p>
      )}
      {error && (
        <p className="text-sm text-red-300 font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
