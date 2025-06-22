import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How long does artificial turf last?",
    answer:
      "High-quality artificial turf can last 15-25 years or even longer with proper care and maintenance. The lifespan depends on the quality of the turf, the amount of foot traffic, and environmental conditions.",
  },
  {
    question: "Is artificial turf safe for children and pets?",
    answer:
      "Yes, modern artificial turf is designed to be safe for both children and pets. It's non-toxic, lead-free, and provides a soft, cushioned surface for play. Many turf options also offer excellent drainage to keep the surface clean and dry.",
  },
  {
    question: "How do I maintain artificial turf?",
    answer:
      "Artificial turf is low-maintenance. Regular upkeep involves rinsing with water to remove dust and debris, occasional brushing to keep fibers upright (especially in high-traffic areas), and prompt removal of pet waste or spills.",
  },
  {
    question: "What is the cost of artificial turf installation?",
    answer:
      "The cost varies depending on the size of the area, the type of turf selected, site preparation needed, and complexity of the installation. We provide free, no-obligation quotes tailored to your specific project.",
  },
  {
    question: "Does artificial turf get hot in the sun?",
    answer:
      "Artificial turf can retain more heat than natural grass. However, newer turf technologies include cooling features, and lighter-colored infill materials can help reduce heat absorption. Rinsing the turf with water can also cool it down quickly.",
  },
]

// Define FAQPage JSON-LD Schema
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        key="faq-jsonld" // Add a key for React reconciliation
      />
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-brand-gray-text md:text-xl">
            Find answers to common questions about our turf products and services.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/40 rounded-2xl shadow-soft px-2"
            >
              <AccordionTrigger className="p-6 text-left text-lg font-medium text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-base text-brand-gray-text leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
