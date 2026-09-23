import Image from "next/image";
import Link from "next/link";

export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: Readonly<{
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <div className="border-b border-white/10 bg-black/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3" aria-label="FLOW home">
            <Image src="/images/flow/flow-logo-white.png" alt="FLOW" width={76} height={32} priority />
            <span className="border-l border-white/20 pl-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Publishing policies</span>
          </Link>
          <Link href="/" className="text-sm text-white/60 transition hover:text-white">Return to FLOW</Link>
        </div>
      </div>

      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(226,35,26,.24),transparent_42%),linear-gradient(120deg,#130000,#070707_58%)]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#ff625c]">{eyebrow}</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">{title}</h1>
          <p className="mt-7 text-sm text-white/55">Last updated {updated}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16 pb-24 text-[1.05rem] leading-8 text-white/75 md:py-24">
        {children}
      </article>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        <Link href="/privacy" className="mx-3 hover:text-white">Privacy Policy</Link>
        <Link href="/terms" className="mx-3 hover:text-white">Terms of Service</Link>
        <span className="mx-3">© {new Date().getFullYear()} FLOW</span>
      </footer>
    </main>
  );
}
