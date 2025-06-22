import ContactDialog from "@/components/contact-dialog"

export default function CtaBanner() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-turf-green-extralight">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-turf-green-dark">
          Ready to Transform Your Backyard?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-brand-gray-text md:text-xl">
          Let our experts help you design the perfect outdoor space. Contact us today for a free consultation and quote.
        </p>
        <div className="mt-8">
          <ContactDialog
            triggerButtonText="Contact Us Today"
            triggerButtonVariant="default"
            className="bg-turf-green hover:bg-turf-green-dark text-white px-10 py-4 h-14 text-xl rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
          />
        </div>
      </div>
    </section>
  )
}
