"use client";

import Link from "next/link";
import { useState } from "react";

export default function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
  >({ type: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email && !phone) {
      setStatus({ type: "error", message: "Provide email or mobile number" });
      return;
    }
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/deleteaccount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, reason }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setStatus({
        type: "success",
        message:
          "We received your request. If this email is associated with an account, we will process the deletion.",
      });
      setEmail("");
      setPhone("");
      setReason("");
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong",
      });
    }
  }

  return (
    <>
      <div className="contact-form-header">
        <h2 className="contact-form-title">Account deletion request</h2>
        <p className="contact-form-description">
          Share the email or mobile number linked to your account. We’ll verify
          and proceed with deletion.
        </p>
      </div>
      <form onSubmit={onSubmit} className="contact-form">
        <div className="form-group">
          <label className="form-label">Email address</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
          <small style={{ color: "#666" }}>
            Optional if you provide mobile number
          </small>
        </div>

        <div className="form-group">
          <label className="form-label">Mobile number</label>
          <input
            className="form-input"
            type="tel"
            name="phone"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 555 123 4567"
            pattern="^[+0-9][0-9\s-]{6,}$"
          />
          <small style={{ color: "#666" }}>
            Include country code, e.g., +1
          </small>
        </div>

        <div className="form-group">
          <label className="form-label">Reason for deletion (optional)</label>
          <textarea
            className="form-textarea"
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Tell us why you're leaving"
            rows={4}
          />
        </div>

        <button
          className="btn-primary-bg-white-text form-submit-btn"
          type="submit"
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? "Submitting..." : "Submit request"}
        </button>

        {status.type === "success" && (
          <p role="status" style={{ color: "green" }}>
            {status.message}
          </p>
        )}
        {status.type === "error" && (
          <p role="status" style={{ color: "red" }}>
            {status.message}
          </p>
        )}
      </form>
      <p style={{ marginTop: 12, fontSize: 14 }}>
        Changed your mind? <Link href="/">Go back home</Link>
      </p>
    </>
  );
}
