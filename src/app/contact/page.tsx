import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Main Contact Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column - Image */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/contactTeam.png"
                alt="Silk Road Runners Team"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Column - Contact Info */}
            <div className="flex flex-col justify-center rounded-lg bg-gray-50 p-8">
              <h1 className="mb-6 text-4xl font-bold">Silk Rode Runners</h1>
              <p className="mb-4 text-lg text-gray-700">Running club in Uzbekistan</p>
              <p className="mb-2 text-gray-700">
                Email:{" "}
                <a href="mailto:abcd@gmail.com" className="hover:text-[#D9A84E]">
                  abcd@gmail.com
                </a>
              </p>
              <p className="mb-8 text-gray-700">
                Phone:{" "}
                <a href="tel:+777777777" className="hover:text-[#D9A84E]">
                  +777777777
                </a>
              </p>
              <Link
                href="#"
                className="mt-auto w-fit rounded-md bg-[#D9A84E] px-6 py-3 font-medium text-white transition-colors hover:bg-[#c99a47]"
              >
                Register for Marathon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events CTA Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image src="/jointeam.jpg" alt="Events background" fill className="object-cover brightness-50" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white md:px-8">
          <h2 className="mb-6 text-4xl font-bold">
            Check out
            <br />
            upcomming events
          </h2>
          <Link
            href="/events"
            className="inline-block rounded-md bg-[#D9A84E] px-6 py-3 font-medium text-white transition-colors hover:bg-[#c99a47]"
          >
            Check out
          </Link>
        </div>
      </section>
    </main>
  )
}
