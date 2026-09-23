import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | FLOW",
  description: "How FLOW handles information used to provide its online ministry and authorized publishing services.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="FLOW online ministry" title="Privacy Policy" updated="23 September 2026">
      <div className="space-y-10">
        <p className="text-xl leading-9 text-white/85">
          FLOW is an online prophetic prayer ministry. This policy explains how FLOW handles information when people use theflowchurch.online, contact the ministry, or use authorized publishing services that support FLOW&apos;s video ministry.
        </p>
        <section><h2 className="legal-heading">Information we process</h2><p>We may process contact details you provide, messages and testimonies you send, basic website usage information, and information needed to operate authorized video-publishing services. For connected YouTube channels, this may include the channel identifier, video metadata, analytics available through the authorized account, and OAuth access tokens granted by the account owner.</p></section>
        <section><h2 className="legal-heading">Why we use it</h2><p>We use this information to respond to ministry enquiries, organize online prayer meetings, publish and manage authorized video content, improve our educational and faith-based resources, protect our services, and meet legal obligations.</p></section>
        <section><h2 className="legal-heading">YouTube data</h2><p>Our authorized publishing services use YouTube API Services only to manage channels that their owners have connected or authorized. We do not sell YouTube data. You may revoke our access at any time through your Google Account&apos;s third-party access settings. Google&apos;s privacy practices are governed by the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>.</p></section>
        <section><h2 className="legal-heading">Sharing and retention</h2><p>We share information only with service providers needed to operate the site and authorized publishing services, or when required by law. We retain information only for as long as reasonably necessary for the purpose it was collected, security, accounting, or legal obligations. Authorized channel access is removed when an owner revokes access or requests removal.</p></section>
        <section><h2 className="legal-heading">Your choices</h2><p>You may request access, correction, deletion, or withdrawal of consent for information we hold. To make a request, email <a href="mailto:connect@theflowchurch.online">connect@theflowchurch.online</a>. We may need to verify your identity before completing a request.</p></section>
        <section><h2 className="legal-heading">Security and updates</h2><p>We use reasonable administrative and technical safeguards to protect information. No online service can guarantee absolute security. We may revise this policy when our practices or legal requirements change; the current version will always be posted here.</p></section>
      </div>
    </LegalPage>
  );
}
