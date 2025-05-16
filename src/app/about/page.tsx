import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Bekmurodov Ozodbek",
      role: "Main runner",
      image: "/ozod.png",
      bio: "Dr. Lyusyena Kirakosyan serves as a Senior Project Associate at the Virginia Tech Institute for Policy and Governance. Also, as a college essay coach, she has helped students write effective, memorable essays for undergraduate college admissions to U.S., Canadian, and European universities.",
    },
    {
      id: 2,
      name: "Bekmurodov Ozodbek",
      role: "Main runner",
      image: "/ozod.png",
      bio: "Dr. Lyusyena Kirakosyan serves as a Senior Project Associate at the Virginia Tech Institute for Policy and Governance. Also, as a college essay coach, she has helped students write effective, memorable essays for undergraduate college admissions to U.S., Canadian, and European universities.",
    },
    {
      id: 3,
      name: "Bekmurodov Ozodbek",
      role: "Main runner",
      image: "/ozod.png",
      bio: "Dr. Lyusyena Kirakosyan serves as a Senior Project Associate at the Virginia Tech Institute for Policy and Governance. Also, as a college essay coach, she has helped students write effective, memorable essays for undergraduate college admissions to U.S., Canadian, and European universities.",
    },
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Decorative elements */}
      <div className="absolute left-0 top-20 hidden w-32 opacity-20 lg:block">
        <Image src="/decor.png" alt="" width={200} height={200} />
      </div>
      <div className="absolute right-0 top-20 hidden w-32 opacity-20 lg:block">
        <Image src="/decor.png" alt="" width={200} height={200} />
      </div>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">
            Welcome to <span className="text-[#D9A84E]">Silk Stride</span>
          </h1>
          <p className="mx-auto mb-12 max-w-4xl text-center text-gray-700">
            Freshman Academy prepares high school students for admission to the world's top universities with partial or
            full scholarships. Freshman Academy was founded in 2019 by a team of Yale-NUS students. Since then,
            Freshman's graduates were admitted to Harvard, Yale, Princeton, Columbia, Stanford, Berkeley, Babson, and
            many more.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/aboutRunning.jpg"
                alt="Runners in mountains"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/aboutRunning.jpg"
                alt="Runners in mountains"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/aboutRunning.jpg"
                alt="Runners in mountains"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="mb-12 text-4xl font-bold">Our team</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                <p className="mb-4 text-[#D9A84E]">{member.role}</p>
                <p className="text-sm text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image src="/jointeam.jpg" alt="Join our team background" fill className="object-cover brightness-50" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white md:px-8">
          <h2 className="mb-6 text-4xl font-bold">Join our team</h2>
          <p className="mx-auto mb-8 max-w-3xl">
            Dr. Lyusyena Kirakosyan serves as a Senior Project Associate at the Virginia Tech Institute for Policy and
            Governance. Also, as a college essay coach, she has helped students write effective, memorable essays for
            undergraduate college admissions to U.S., Canadian, and European universities.
          </p>
          <Link
            href="#"
            className="inline-block rounded-full bg-[#D9A84E] px-8 py-3 font-medium text-white transition-colors hover:bg-[#c99a47]"
          >
            Join now
          </Link>
        </div>
      </section>
    </main>
  )
}
