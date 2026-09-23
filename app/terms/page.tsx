import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Scale, Mail, Shield } from 'lucide-react'
import { Footer } from '@/components/sections/footer'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'Terms and Conditions — QDelta Agency',
  description: 'Terms and Conditions for digital agency design, development, and engineering services provided by QDelta.',
}

export default function TermsPage() {
  return (
    <>
      <SiteNav />

      <main className="relative min-h-screen bg-[#000000] text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Ambient Golden Glow Gradients */}
        <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-[35rem] w-[50rem] rounded-full bg-gradient-to-b from-gold/10 via-amber-600/5 to-transparent blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md transition-colors hover:border-[#E5B869]/40 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          {/* Header Title */}
          <div className="border-b border-white/10 pb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5B869]/30 bg-[#E5B869]/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#E5B869] mb-4">
              <Scale className="h-3.5 w-3.5" />
              <span>Service Agreement</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Terms &amp; <span className="font-serif italic text-gold">Conditions</span>
            </h1>
            <p className="mt-4 text-sm text-zinc-400 font-mono">
              Effective Date: September 2026 &bull; QDelta Agency
            </p>
            <p className="mt-3 text-base text-zinc-300 leading-relaxed max-w-2xl">
              These Terms and Conditions apply to all digital design, web development, cloud architecture, and advisory services provided by QDelta.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="mt-12 space-y-8 text-zinc-300">
            
            {/* Section 1: Services */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  01
                </span>
                <h2 className="text-xl font-semibold text-white">Services</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                QDelta will provide the services agreed upon in the quotation, proposal, or Statement of Work (SOW).
              </p>
            </section>

            {/* Section 2: Project Scope */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  02
                </span>
                <h2 className="text-xl font-semibold text-white">Project Scope</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                The project will include only the services and deliverables mentioned in the agreed project documents. Any additional work may involve extra charges and additional time.
              </p>
            </section>

            {/* Section 3: Payment */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  03
                </span>
                <h2 className="text-xl font-semibold text-white">Payment</h2>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 list-disc list-inside">
                <li>The client must pay according to the agreed payment terms.</li>
                <li>An advance payment may be required before starting the project.</li>
                <li>Work may be paused if payments are delayed.</li>
                <li>Final files or production access may be provided after full payment.</li>
              </ul>
            </section>

            {/* Section 4: Project Timeline */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  04
                </span>
                <h2 className="text-xl font-semibold text-white">Project Timeline</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                QDelta will make reasonable efforts to complete the project within the agreed timeline. The timeline may change if the client delays providing information, content, feedback, or approval.
              </p>
            </section>

            {/* Section 5: Client Responsibilities */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  05
                </span>
                <h2 className="text-xl font-semibold text-white">Client Responsibilities</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                The client must provide accurate information, required files, content, approvals, and access needed to complete the project in a timely manner.
              </p>
            </section>

            {/* Section 6: Revisions and Changes */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  06
                </span>
                <h2 className="text-xl font-semibold text-white">Revisions and Changes</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                The number of included revisions will be specified in the quotation or SOW. Requests outside the agreed scope or beyond included revisions may require additional charges.
              </p>
            </section>

            {/* Section 7: Ownership and Usage */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  07
                </span>
                <h2 className="text-xl font-semibold text-white">Ownership and Usage</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                After full payment, the client may use the final approved deliverables for the agreed purpose. QDelta may retain ownership of its pre-existing tools, templates, methods, and reusable materials unless otherwise agreed in writing.
              </p>
            </section>

            {/* Section 8: Confidentiality */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  08
                </span>
                <h2 className="text-xl font-semibold text-white">Confidentiality</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                Both QDelta and the client must keep confidential information private and use it only for the agreed project. Non-disclosure obligations apply to all proprietary data exchanged.
              </p>
            </section>

            {/* Section 9: Cancellation */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  09
                </span>
                <h2 className="text-xl font-semibold text-white">Cancellation</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                If the client cancels the project after work has started, the client may be required to pay for the work already completed. Any refund will depend on the agreed payment and cancellation terms.
              </p>
            </section>

            {/* Section 10: Delays */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  10
                </span>
                <h2 className="text-xl font-semibold text-white">Delays</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                QDelta is not responsible for delays caused by circumstances outside its reasonable control, including delayed client responses, technical problems, or third-party service issues.
              </p>
            </section>

            {/* Section 11: Communication and Approval */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  11
                </span>
                <h2 className="text-xl font-semibold text-white">Communication and Approval</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                Project approvals, changes, and important decisions should be confirmed through email, written messages, or another agreed official communication method.
              </p>
            </section>

            {/* Section 12: Agreement */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  12
                </span>
                <h2 className="text-xl font-semibold text-white">Agreement</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                By accepting the quotation, proposal, SOW, or starting the project, the client confirms that they agree to these Terms and Conditions.
              </p>
            </section>

            {/* Section 13: Contact */}
            <section className="rounded-2xl border border-[#E5B869]/20 bg-gradient-to-br from-[#E5B869]/10 via-black to-black p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/25 font-mono text-xs font-bold text-gold">
                  13
                </span>
                <h2 className="text-xl font-semibold text-white">Contact QDelta</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300 mb-6">
                For questions regarding project proposals, Statements of Work, or contract agreements, reach out to our team:
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@qdelta.in"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-all hover:bg-gold hover:shadow-[0_0_20px_rgba(229,184,105,0.4)]"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@qdelta.in</span>
                </a>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Shield className="h-4 w-4 text-[#E5B869]" />
                  <span>View Privacy Policy</span>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
