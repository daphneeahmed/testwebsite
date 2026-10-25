"use client";

import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("daphnee.ahmed@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.workEmail.trim())) {
      newErrors.workEmail = true;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStatus("submitting");
      setTimeout(() => {
        setStatus("success");
        setFormData({ fullName: "", workEmail: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }, 800);
    }
  };

  return (
<main className="w-full pt-20 bg-background min-h-screen" id="main-content"><div className="flex flex-col w-full">
{/*  Subtle decorative ambient background elements  */}
<div className="relative w-full max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl">
<div className="absolute -top-12 right-12 w-96 h-96 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-1/2 left-4 w-72 h-72 bg-tertiary-fixed/20 rounded-full blur-2xl pointer-events-none -z-10"></div>
{/*  Header Section  */}
<header className="max-w-3xl mb-space-xl space-y-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded-full text-secondary">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>forum</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Direct Communication</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Get in Touch</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Let's discuss data analytics initiatives, business intelligence consulting, or career opportunities.
      </p>
</header>
{/*  Two-Column Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
{/*  Left Column: Direct Channels & Profile (5 Cols)  */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
{/*  Availability Status Badge  */}
<div className="p-space-md rounded-xl bg-tertiary-fixed text-on-tertiary-fixed shadow-sm flex items-start gap-space-sm">
<span className="relative flex h-3 w-3 mt-1 shrink-0">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-fixed-variant opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-container"></span>
</span>
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-on-tertiary-fixed-variant block">Status: Active Search</span>
<p className="font-body-sm text-body-sm font-medium leading-relaxed">
              Currently open to full-time Data Analyst, BI Developer, and Analytics Engineer roles.
            </p>
</div>
</div>
{/*  Direct Channels Card Stack  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md space-y-space-md">
<h2 className="font-headline-sm text-headline-sm text-primary">Direct Channels</h2>
<ul className="space-y-space-sm" role="list">
{/*  Email Item  */}
<li className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group flex items-center justify-between gap-space-sm">
<a className="flex items-center gap-space-sm min-w-0 flex-1 focus:outline-none focus:ring-2 focus:ring-secondary rounded p-space-xs" href="mailto:daphnee.ahmed@gmail.com">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-xl">mail</span>
</div>
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-medium">Email Address</span>
<span className="font-body-md text-body-md text-primary font-semibold truncate block">daphnee.ahmed@gmail.com</span>
</div>
</a>
<button
  type="button"
  aria-label="Copy email address to clipboard"
  onClick={handleCopyEmail}
  className="p-space-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded transition-all focus:outline-none focus:ring-2 focus:ring-secondary shrink-0"
>
  <span className="material-symbols-outlined text-base">
    {copied ? "check" : "content_copy"}
  </span>
</button>
</li>
{/*  Phone Item  */}
<li className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group flex items-center justify-between gap-space-sm">
<a className="flex items-center gap-space-sm min-w-0 flex-1 focus:outline-none focus:ring-2 focus:ring-secondary rounded p-space-xs" href="tel:+60198605028">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-xl">call</span>
</div>
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-medium">Telephone</span>
<span className="font-body-md text-body-md text-primary font-semibold truncate block">+60 198605028</span>
</div>
</a>
<span className="font-label-sm text-label-sm text-on-surface-variant pr-space-xs shrink-0 hidden sm:inline">Direct dial</span>
</li>
{/*  LinkedIn Item  */}
<li className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group flex items-center justify-between gap-space-sm">
<a aria-label="Wan Daphneelya LinkedIn profile (opens in new tab)" className="flex items-center gap-space-sm min-w-0 flex-1 focus:outline-none focus:ring-2 focus:ring-secondary rounded p-space-xs" href="https://www.linkedin.com/in/wan-daphneelya" rel="noopener noreferrer" target="_blank">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-xl">link</span>
</div>
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-medium">Professional Network</span>
<span className="font-body-md text-body-md text-primary font-semibold truncate block">linkedin.com/in/wan-daphneelya</span>
</div>
</a>
<span className="material-symbols-outlined text-base text-on-surface-variant group-hover:text-primary transition-colors pr-space-xs shrink-0">open_in_new</span>
</li>
{/*  Location Item  */}
<li className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-xl">location_on</span>
</div>
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-medium">Base Location</span>
<span className="font-body-md text-body-md text-primary font-semibold block">Kuala Lumpur, Malaysia</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 block">Open to On-site, Hybrid &amp; Remote opportunities</span>
</div>
</li>
</ul>
</div>
{/*  Reference Note Banner  */}
<div className="p-space-md rounded-xl bg-surface-container-high text-on-surface flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-xl shrink-0" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
<p className="font-body-sm text-body-sm text-on-surface leading-snug">
            Professional &amp; academic references available upon request.
          </p>
</div>
{/*  Data Metric Pill Box  */}
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium block">Average Response Time</span>
<span className="font-metric-display text-metric-display text-primary font-bold">&lt; 24h</span>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium block">Standard Timezone</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">MYT (UTC+8)</span>
</div>
</div>
</div>
{/*  Right Column: Interactive Accessible Form (7 Cols)  */}
<div className="lg:col-span-7">
<div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-lg relative overflow-hidden">
<div className="mb-space-lg">
<h2 className="font-headline-md text-headline-md text-primary">Send an Inquiry</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Fill in the parameters below. Messages are delivered directly to Daphneelya's inbox within 24 hours.
            </p>
</div>
<form
  onSubmit={handleSubmit}
  aria-label="Contact Wan Daphneelya"
  className="space-y-space-md"
  id="contact-form"
  noValidate
>
  {/* Full Name */}
  <div className="space-y-space-xs">
    <label className="block font-label-md text-label-md text-primary font-medium" htmlFor="full-name">
      Full Name <span aria-hidden="true" className="text-error">*</span>
    </label>
    <div className="relative">
      <input
        id="full-name"
        name="fullName"
        type="text"
        required
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        placeholder="e.g. Sarah Jenkins"
        aria-describedby="name-helper"
        aria-required="true"
        className={`w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all ${
          errors.fullName ? "bg-error-container text-on-error-container" : ""
        }`}
      />
    </div>
    {errors.fullName && (
      <p className="text-on-surface-variant font-label-sm text-label-sm" id="name-helper">
        Please enter your given name and surname.
      </p>
    )}
  </div>

  {/* Email Address */}
  <div className="space-y-space-xs">
    <label className="block font-label-md text-label-md text-primary font-medium" htmlFor="work-email">
      Work Email Address <span aria-hidden="true" className="text-error">*</span>
    </label>
    <div className="relative">
      <input
        id="work-email"
        name="workEmail"
        type="email"
        required
        value={formData.workEmail}
        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
        placeholder="e.g. s.jenkins@company.com"
        aria-describedby="email-helper"
        aria-required="true"
        className={`w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all ${
          errors.workEmail ? "bg-error-container text-on-error-container" : ""
        }`}
      />
    </div>
    {errors.workEmail && (
      <p className="text-on-surface-variant font-label-sm text-label-sm" id="email-helper">
        Please provide a valid business or professional email.
      </p>
    )}
  </div>

  {/* Subject Line */}
  <div className="space-y-space-xs">
    <label className="block font-label-md text-label-md text-primary font-medium" htmlFor="subject">
      Subject
    </label>
    <input
      id="subject"
      name="subject"
      type="text"
      value={formData.subject}
      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
      placeholder="e.g. Data Analytics Role / Project Inquiry"
      className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all"
    />
  </div>

  {/* Message Textarea */}
  <div className="space-y-space-xs">
    <label className="block font-label-md text-label-md text-primary font-medium" htmlFor="message-body">
      Message <span aria-hidden="true" className="text-error">*</span>
    </label>
    <textarea
      id="message-body"
      name="message"
      rows={5}
      required
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      placeholder="Tell me about your team, project, or data challenge..."
      aria-describedby="message-helper"
      aria-required="true"
      className={`w-full p-space-md bg-surface-container-low text-on-surface rounded-lg placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-all resize-y ${
        errors.message ? "bg-error-container text-on-error-container" : ""
      }`}
    />
    {errors.message && (
      <p className="text-on-surface-variant font-label-sm text-label-sm" id="message-helper">
        Message content cannot be empty.
      </p>
    )}
  </div>

  {/* Submit Button & Feedback Area */}
  <div className="pt-space-xs space-y-space-sm">
    <button
      type="submit"
      disabled={status === "submitting"}
      className={`w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-lg py-space-sm bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 cursor-pointer ${
        status === "submitting" ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {status === "submitting" ? (
        <>
          <span>Transmitting...</span>
          <span className="material-symbols-outlined text-lg animate-spin">sync</span>
        </>
      ) : status === "success" ? (
        <>
          <span>Sent Successfully</span>
          <span className="material-symbols-outlined text-lg">done_all</span>
        </>
      ) : (
        <>
          <span>Send Message</span>
          <span className="material-symbols-outlined text-lg">send</span>
        </>
      )}
    </button>

    {/* Live Status Alert Box */}
    {status === "success" && (
      <div
        role="alert"
        aria-live="polite"
        className="p-space-md rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-body-sm text-body-sm flex items-center gap-space-sm animate-fadeIn"
      >
        <span className="material-symbols-outlined text-xl">check_circle</span>
        <span>Thank you! Your message was delivered successfully. I will respond to your inquiry shortly.</span>
      </div>
    )}
  </div>
</form>
</div>
</div>
</div>
</div>
</div>
</main>
  );
}
