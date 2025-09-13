import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Putting Greens | Backyard & Indoor Golf Greens | Turf Pros",
  description:
    "Install a professional-quality custom putting green in your backyard or home. Our artificial turf greens offer true ball roll and realistic performance. Get a free quote!",
}

export default function PuttingGreensPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/turf-pro-putting-green-residential-home-medium-iB8P1yagGBoib76YM5qXM7kY15ka6A.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Perfect Your Putt at Home</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Bring the golf course to your backyard with a custom-designed, professional-grade putting green. Experience
            true ball roll and practice your short game anytime.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Get a Putting Green Quote
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Golfer's Dream Upgrade</h2>
            <p className="text-xl text-gray-600">
              Our putting greens are engineered for realistic performance and lasting beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "True Roll technology for realistic ball speed and movement.",
              "Fully customizable with custom breaks, tiers, and hole placements.",
              "Low-maintenance, requiring no watering, mowing, or fertilizing.",
              "Durable and weather-resistant for year-round practice.",
              "Add sand traps, chipping areas, and other features.",
              "A stunning landscape feature that adds value to your home.",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Putting Green Portfolio</h2>
            <p className="text-xl text-gray-600">
              Explore some of the custom putting greens we've designed and installed for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/large-multi-hole-putting-green-in-luxury-backyard.jpg", alt: "Large multi-hole putting green" },
              { src: "/putting-green-with-beautiful-hardscaping.jpg", alt: "Putting green with hardscaping" },
              { src: "/putting-green-with-night-lighting.jpg", alt: "Putting green with night lighting" },
              { src: "/putting-green-in-wooded-backyard-setting.jpg", alt: "Putting green in wooded setting" },
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Dream Green?</h2>
          <p className="text-xl mb-8">
            Our design consultants are ready to help you create the perfect putting green for your space and skill
            level.
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Design My Putting Green
          </button>
        </div>
      </section>
    </div>
  )
}
