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
    images: [{ url: "/portfolio/sports-field-aritifical-turf-hero.jpg" }],
  },
}

const pageContent: ServicePageTemplateProps = {
  heroImageSrc: "/portfolio/sports-field-aritifical-turf-hero.jpg",
  heroImageAlt: "A pristine artificial turf sports field at sunrise, with a white line in the foreground.",
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

  featuresImageSrc: "/portfolio/general-turf-installation.jpg",
  featuresImageAlt: "A Turf Pros team member applies infill to a new putting green installation.",
  featuresTitle: "Our Meticulous Process",
  featuresText:
    "We follow a rigorous multi-step process. It begins with a detailed site assessment, followed by extensive ground preparation, precise turf laying, and professional finishing touches. This commitment to quality ensures your new lawn is not just installed, but engineered to last.",
  featuresList: [
    { icon: <Layers className="h-5 w-5 mr-3 text-turf-green" />, text: "Multi-Layer Base Preparation" },
    { icon: <ShieldCheck className="h-5 w-5 mr-3 text-turf-green" />, text: "Proprietary Seaming Technology" },
    { icon: <Clock className="h-5 w-5 mr-3 text-turf-green" />, text: "Efficient & Timely Project Completion" },
  ],

  galleryTitle: "Showcasing Flawless Installations",
  gallerySubtitle: "The final result of our meticulous installation process is a beautiful, durable lawn.",
  galleryImages: [
    {
      src: "/portfolio/basic-turf-installation-backyard.jpg",
      alt: "A clean and simple rectangular turf installation in an enclosed backyard.",
    },
    {
      src: "/portfolio/hardscape-basic-turf-backyard.jpg",
      alt: "A beautiful turf lawn seamlessly integrated with a paver patio.",
    },
    {
      src: "/portfolio/driveway-concrete-general-turf.jpg",
      alt: "Precision turf strips integrated into a modern concrete driveway.",
    },
    {
      src: "/portfolio/pool-turf.jpg",
      alt: "Complex turf shapes cut perfectly to fit around a modern pool deck.",
    },
  ],

  finalCtaTitle: "Ready for a Flawless Installation?",
  finalCtaSubtitle:
    "Trust the experts with your project. Contact us for a detailed quote and to learn more about our installation guarantee.",
  finalCtaButtonText: "Get an Installation Quote",
}

export default function GeneralTurfInstallationPage() {
  return <ServicePageTemplate {...pageContent} />
}
