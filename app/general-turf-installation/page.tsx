import type { Metadata } from "next"
import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { Layers, ShieldCheck, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Expert Turf Installation Services | The Perfect Foundation | Turf Pros",
  description:
    "Learn about our meticulous turf installation process. From ground preparation to the final touches, we guarantee a flawless, long-lasting result for any project.",
  openGraph: {
    title: "Expert Turf Installation Services | The Perfect Foundation | Turf Pros",
    description: "Learn about our meticulous turf installation process, ensuring a flawless and long-lasting result.",
    images: [{ url: "/hero-turf-installation-v2.jpg" }],
  },
}

const pageContent: ServicePageTemplateProps = {
  heroImageSrc: "/hero-turf-installation-v2.jpg",
  heroImageAlt: "A professional installer laying down a roll of artificial turf in a sunny backyard.",
  heroTitle: "Expert Turf Installation",
  heroSubtitle:
    "A perfect lawn starts with a flawless installation. Our certified team uses industry-leading techniques to ensure your turf is beautiful, durable, and long-lasting.",
  heroCtaText: "Discuss Your Installation Project",

  benefitsTitle: "The Turf Pros Installation Difference",
  benefitsSubtitle:
    "Our process is refined to guarantee the best possible outcome for your investment. We don't cut corners.",
  benefits: [
    "Proper ground excavation and grading for perfect drainage.",
    "High-quality base materials for a stable, permeable foundation.",
    "Precision cutting and seaming for an invisible, natural look.",
    "Secure anchoring to prevent lifting or shifting over time.",
    "Proper infill application for blade support, ballast, and feel.",
    "Thorough site cleanup, leaving your property pristine.",
  ],

  featuresImageSrc: "/turf-installation-closeup.png",
  featuresImageAlt: "A close-up shot showing the secure seams and infill of a professional turf installation.",
  featuresTitle: "Our Meticulous Process",
  featuresText:
    "We follow a rigorous multi-step process. It begins with a detailed site assessment, followed by extensive ground preparation, precise turf laying, and professional finishing touches. This commitment to quality ensures your new lawn is not just installed, but engineered to last.",
  featuresList: [
    { icon: <Layers className="h-5 w-5 mr-3 text-turf-green" />, text: "Multi-Layer Base Preparation" },
    { icon: <ShieldCheck className="h-5 w-5 mr-3 text-turf-green" />, text: "Proprietary Seaming Technology" },
    { icon: <Clock className="h-5 w-5 mr-3 text-turf-green" />, text: "Efficient & Timely Project Completion" },
  ],

  galleryTitle: "The Installation Journey",
  gallerySubtitle: "From bare ground to a green oasis, see the key stages of our professional installation.",
  galleryImages: [
    { src: "/ground-preparation-turf.png", alt: "Ground being prepared and graded for turf installation" },
    { src: "/base-layer-compaction.png", alt: "Compacting the aggregate base layer for stability" },
    { src: "/laying-turf-rolls.png", alt: "Rolling out the artificial turf with precision" },
    { src: "/infill-application-turf.png", alt: "Applying infill to the newly installed turf" },
  ],

  finalCtaTitle: "Ready for a Flawless Installation?",
  finalCtaSubtitle:
    "Trust the experts with your project. Contact us for a detailed quote and to learn more about our installation guarantee.",
  finalCtaButtonText: "Get an Installation Quote",
}

export default function GeneralTurfInstallationPage() {
  return <ServicePageTemplate {...pageContent} />
}
