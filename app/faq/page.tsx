import type { Metadata } from "next"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Turf Professionals",
  description:
    "Get answers to common questions about artificial turf installation, maintenance, costs, and benefits. Expert insights from professional turf installers.",
  keywords: [
    "artificial turf FAQ",
    "synthetic grass questions",
    "turf installation cost",
    "artificial grass maintenance",
    "turf warranty",
    "pet-friendly turf",
    "turf installation process",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Turf Professionals",
    description:
      "Get answers to common questions about artificial turf installation, maintenance, costs, and benefits.",
    images: ["/opengraph-image.png"],
  },
}

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is artificial turf made of?",
        answer:
          "Modern artificial turf is made from high-quality synthetic materials including polyethylene, polypropylene, and nylon fibers. The backing is typically made from polyurethane or latex, providing durability and proper drainage. Our premium turf products also include UV stabilizers to prevent fading and maintain color vibrancy for years.",
      },
      {
        question: "How long does artificial turf last?",
        answer:
          "High-quality artificial turf can last 15-25 years with proper installation and maintenance. The lifespan depends on factors such as foot traffic, climate conditions, and the quality of materials used. Our premium turf products come with warranties ranging from 8-15 years, ensuring long-term value for your investment.",
      },
      {
        question: "Is artificial turf safe for children and pets?",
        answer:
          "Yes, our artificial turf is completely safe for children and pets. It's made from non-toxic materials and doesn't require harmful pesticides or fertilizers. The turf provides a clean, mud-free surface that's perfect for play areas. For pet owners, we offer specialized pet-friendly turf with enhanced drainage and antimicrobial properties.",
      },
      {
        question: "Does artificial turf get hot in summer?",
        answer:
          "Artificial turf can get warm in direct sunlight, but modern turf technology has significantly reduced heat retention. Our premium products feature heat-reducing technology and lighter colors that reflect sunlight. You can also cool the surface quickly with a light water spray. Proper infill selection and installation techniques help minimize heat buildup.",
      },
    ],
  },
  {
    category: "Installation & Cost",
    questions: [
      {
        question: "How much does artificial turf installation cost?",
        answer:
          "The cost varies based on area size, turf quality, site preparation needs, and additional features. Generally, residential installations range from $8-15 per square foot, including materials and professional installation. We provide free, detailed quotes that include all aspects of your project with no hidden fees.",
      },
      {
        question: "How long does installation take?",
        answer:
          "Most residential installations take 1-3 days, depending on the project size and complexity. The process includes site preparation, base installation, turf laying, and finishing touches. Weather conditions and site accessibility can affect timing. We'll provide a detailed timeline during your consultation.",
      },
      {
        question: "What preparation is needed before installation?",
        answer:
          "Site preparation includes removing existing grass, grading the area, installing proper drainage, and creating a stable base with crushed rock or decomposed granite. We handle all preparation work, including permits if required. Our team will assess your site and explain the specific preparation needed for your project.",
      },
      {
        question: "Can artificial turf be installed over concrete?",
        answer:
          "Yes, artificial turf can be installed over concrete with proper preparation. We use specialized padding and drainage systems to ensure comfort and proper water management. This is popular for patios, rooftops, and commercial applications. The concrete surface must be clean, level, and have adequate drainage.",
      },
    ],
  },
  {
    category: "Maintenance & Care",
    questions: [
      {
        question: "How do I maintain artificial turf?",
        answer:
          "Artificial turf requires minimal maintenance compared to natural grass. Regular tasks include removing debris, occasional rinsing, and brushing high-traffic areas to maintain fiber position. For pet areas, rinse regularly and use enzyme cleaners as needed. We provide detailed maintenance guides and ongoing support.",
      },
      {
        question: "Can I use a leaf blower on artificial turf?",
        answer:
          "Yes, leaf blowers are excellent for removing leaves, debris, and dust from artificial turf. Use a moderate setting to avoid displacing infill material. This is one of the easiest ways to keep your turf looking pristine year-round.",
      },
      {
        question: "What if my artificial turf gets stained?",
        answer:
          "Most stains can be easily removed with mild soap and water. For tougher stains, use a mixture of white vinegar and water or specialized turf cleaners. The non-porous surface of artificial turf makes it naturally stain-resistant. We provide specific cleaning instructions for different types of stains.",
      },
      {
        question: "Do I need to add infill, and how often?",
        answer:
          "Infill helps maintain turf structure and provides cushioning. Depending on usage and weather, you may need to add infill every 2-3 years. We use various infill types including silica sand, rubber granules, and organic options. During installation, we'll recommend the best infill type for your specific needs.",
      },
    ],
  },
  {
    category: "Environmental & Benefits",
    questions: [
      {
        question: "Is artificial turf environmentally friendly?",
        answer:
          "Artificial turf offers several environmental benefits including water conservation (saving thousands of gallons annually), elimination of pesticides and fertilizers, and reduced carbon emissions from lawn maintenance equipment. Many of our products are made from recycled materials and are fully recyclable at end of life.",
      },
      {
        question: "How much water does artificial turf save?",
        answer:
          "Artificial turf can save 50,000-70,000 gallons of water per year for an average-sized lawn, depending on your location and climate. This represents significant cost savings on water bills and contributes to water conservation efforts, especially important in drought-prone areas.",
      },
      {
        question: "Does artificial turf provide good drainage?",
        answer:
          "Yes, properly installed artificial turf provides excellent drainage. Our turf products have perforated backing that allows water to drain through at rates of 30+ inches per hour. Combined with proper base preparation and drainage systems, artificial turf often drains better than natural grass.",
      },
      {
        question: "Can artificial turf help with allergies?",
        answer:
          "Artificial turf can significantly reduce allergy symptoms by eliminating grass pollen, reducing dust, and preventing the growth of mold and mildew that can occur in natural grass. It also eliminates the need for chemical treatments that can trigger sensitivities.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/portfolio/backyard-putting-green-genaral-turf.jpg"
          alt="Beautiful artificial turf installation with putting green"
          fill
          style={{ objectFit: "cover" }}
          quality={85}
          priority
          className="brightness-[0.4]"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Get expert answers to all your artificial turf questions
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know About Artificial Turf
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From installation to maintenance, we've compiled answers to the most common questions about artificial
              turf to help you make an informed decision.
            </p>
          </div>

          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-turf-green">
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-gray-200 rounded-lg px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-turf-green">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-2">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of artificial turf experts is here to help. Get personalized answers and a free consultation for
              your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-turf-green hover:bg-turf-green-dark transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 py-3 border border-turf-green text-base font-medium rounded-md text-turf-green bg-white hover:bg-gray-50 transition-colors"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
