import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Mail, FileText } from 'lucide-react'
import { Footer } from '@/components/sections/footer'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'Privacy Policy — QDelta Agency',
  description: 'Privacy Policy and client data protection practices of QDelta Agency.',
}

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />

      <main className="relative min-h-screen bg-[#000000] text-white pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Ambient Golden Glow Gradients */}
        <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-[35rem] w-[50rem] rounded-full bg-gradient-to-b from-gold/10 via-amber-600/5 to-transparent blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
              <Shield className="h-3.5 w-3.5" />
              <span>Legal Document</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Privacy <span className="font-serif italic text-gold">Policy</span>
            </h1>
            <p className="mt-4 text-sm text-zinc-400 font-mono">
              Effective Date: September 2026 &bull; QDelta Agency
            </p>
            <p className="mt-3 text-base text-zinc-300 leading-relaxed max-w-2xl">
              QDelta respects your privacy and is committed to protecting your personal and business information.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="mt-12 space-y-10 text-zinc-300">
            
            {/* Section 1 */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  01
                </span>
                <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400 mb-3">We may collect:</p>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 list-disc list-inside">
                <li>Name and contact details.</li>
                <li>Company and project information.</li>
                <li>Files, images, documents, and content shared by the client.</li>
                <li>Payment and invoice details.</li>
                <li>Website or service usage information, when applicable.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  02
                </span>
                <h2 className="text-xl font-semibold text-white">How We Use Information</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400 mb-3">We use the information to:</p>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 list-disc list-inside">
                <li>Understand and complete client projects.</li>
                <li>Communicate with clients.</li>
                <li>Provide support and updates.</li>
                <li>Process payments and prepare invoices.</li>
                <li>Improve our services.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  03
                </span>
                <h2 className="text-xl font-semibold text-white">Information Protection</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                QDelta will take reasonable steps to protect client information from unauthorized access, misuse, or disclosure.
              </p>
            </section>

            {/* Section 4 */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  04
                </span>
                <h2 className="text-xl font-semibold text-white">Sharing of Information</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400 mb-3">
                QDelta will not sell or share personal or business information with third parties unless:
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 list-disc list-inside">
                <li>The client gives permission.</li>
                <li>It is required to complete the project.</li>
                <li>It is required by law.</li>
                <li>It is necessary to use trusted service providers.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  05
                </span>
                <h2 className="text-xl font-semibold text-white">Client Files and Content</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                Client files and information will be used only for agreed project-related purposes. QDelta will not publicly display or use client work for marketing without the client’s permission.
              </p>
            </section>

            {/* Section 6 */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  06
                </span>
                <h2 className="text-xl font-semibold text-white">Data Retention</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                QDelta may keep necessary project, invoice, and communication records for business and legal purposes.
              </p>
            </section>

            {/* Section 7 */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  07
                </span>
                <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                Some projects may use third-party tools or services. Their privacy policies may also apply when client information is processed through those services.
              </p>
            </section>

            {/* Section 8 */}
            <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                  08
                </span>
                <h2 className="text-xl font-semibold text-white">Policy Updates</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                QDelta may update this Privacy Policy when necessary. The updated version will be shared through the appropriate communication channel.
              </p>
            </section>

            {/* Section 9: Contact */}
            <section className="rounded-2xl border border-[#E5B869]/20 bg-gradient-to-br from-[#E5B869]/10 via-black to-black p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/25 font-mono text-xs font-bold text-gold">
                  09
                </span>
                <h2 className="text-xl font-semibold text-white">Contact Us</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300 mb-6">
                For any privacy-related questions, clarifications, or requests regarding your data, please contact our team directly:
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
                  href="/terms"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-white/10"
                >
                  <FileText className="h-4 w-4 text-[#E5B869]" />
                  <span>View Terms and Conditions</span>
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
