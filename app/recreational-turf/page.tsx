import type { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Recreational & Sports Turf | Playgrounds, Game Courts | Turf Pros",
    description:
      "Install high-performance recreational turf for sports fields, playgrounds, and active play areas with Turf Pros. Durable, safe, and low-maintenance solutions.",
    keywords: [
      "recreational turf",
      "sports turf",
      "playground turf",
      "artificial grass for sports",
      "synthetic turf for play areas",
      "multi-sport turf",
      "game court turf",
      "safe play surfaces",
    ],
    openGraph: {
      title: "Recreational & Sports Turf Applications | Turf Pros",
      description: "Durable and safe artificial turf for all your recreational and sports needs.",
      images: [
        {
          url: "/portfolio/school-playground-field-turf.jpg",
          width: 1200,
          height: 630,
          alt: "Recreational Sports Turf Field",
        },
      ],
    },
  }
}

export default function RecreationalTurfPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/turf-pro-putting-green-residential-home-medium-iB8P1yagGBoib76YM5qXM7kY15ka6A.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Active Play, All Year Round</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            High-performance recreational turf for sports, playgrounds, and active lifestyles.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-turf-green hover:bg-turf-green-dark text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
          >
            Get a Recreational Turf Quote
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Ultimate Surface for Play and Sports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our recreational turf is designed for safety, durability, and peak performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-turf-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Versatile for various sports and activities</h3>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-turf-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consistent playing surface year-round</h3>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-turf-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reduced risk of injuries compared to hard surfaces</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Engineered for Fun and Safety</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether it's for a backyard sports court, a community playground, or a commercial facility, our
                recreational turf solutions meet the highest standards.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-turf-green rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Variety of pile heights and densities for different activities</span>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-turf-green rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Optional shock-absorbent padding for enhanced safety</span>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-turf-green rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Customizable with game lines for various sports</span>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-turf-green rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">UV stabilized to resist fading and wear</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/portfolio/playground-putting-green-pet-friendly.jpg"
                alt="Recreational turf installation"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-turf-green-extralight">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-turf-green-dark mb-4">Ready to Create Your Ultimate Play Area?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your recreational turf needs and design a space that's perfect for fun, sports, and everything
            in between.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-turf-green hover:bg-turf-green-dark text-white px-10 py-4 text-xl font-semibold rounded-lg transition-colors"
          >
            Plan Your Recreational Space
          </Link>
        </div>
      </section>
    </div>
  )
}
