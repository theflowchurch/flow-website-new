import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | FLOW",
  description: "Terms governing use of the FLOW website and authorized publishing services.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="FLOW online ministry" title="Terms of Service" updated="23 September 2026">
      <div className="space-y-10">
        <p className="text-xl leading-9 text-white/85">These terms govern your use of theflowchurch.online and FLOW&apos;s authorized publishing services. By using them, you agree to these terms and our <a href="/privacy">Privacy Policy</a>.</p>
        <section><h2 className="legal-heading">Purpose of the service</h2><p>FLOW provides faith-based educational content, online prayer resources, and authorized tools that help the ministry publish and organize video content. The services are offered for lawful, respectful use in support of the ministry&apos;s mission.</p></section>
        <section><h2 className="legal-heading">Authorized channel access</h2><p>Only a channel owner or an authorized manager may connect a YouTube channel to the publishing service. You remain responsible for the permissions you grant, the content you authorize for publishing, and compliance with YouTube&apos;s terms, community guidelines, and applicable law. You may revoke access through your Google Account settings at any time.</p></section>
        <section><h2 className="legal-heading">Content and intellectual property</h2><p>Site content, ministry materials, trademarks, and original media are protected by applicable intellectual-property laws. Do not reproduce, upload, distribute, or use content unless you have permission or another lawful basis to do so. You must not use the service to misrepresent affiliation with YouTube, Google, FLOW, or any other person or organization.</p></section>
        <section><h2 className="legal-heading">Acceptable use</h2><p>You may not misuse the site or publishing service, interfere with its operation, attempt to access accounts without permission, submit harmful material, or use the service for unlawful, deceptive, abusive, or infringing activity.</p></section>
        <section><h2 className="legal-heading">Service changes and contact</h2><p>We may update, suspend, or change parts of the service when necessary. If you have questions about these terms or want to report a concern, email <a href="mailto:connect@theflowchurch.online">connect@theflowchurch.online</a>.</p></section>
      </div>
    </LegalPage>
  );
}
