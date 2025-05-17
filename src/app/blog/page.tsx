import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  // Sample blog posts data - all with the same content as shown in the design
  const blogPosts = Array(6).fill({
    id: 1,
    title: "#5 Freshman Uni Insiders at Princeton",
    date: "10th October",
    image: "/images/blog-author.jpg",
    slug: "freshman-uni-insiders-princeton",
  })

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Decorative elements */}
      <div className="absolute left-0 top-20 hidden w-32 opacity-20 lg:block">
        <Image src="/images/decorative-pattern.png" alt="" width={200} height={200} />
      </div>
      <div className="absolute right-0 top-20 hidden w-32 opacity-20 lg:block">
        <Image src="/images/decorative-pattern.png" alt="" width={200} height={200} />
      </div>

      {/* Blog Header */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h1 className="mb-16 text-center text-4xl font-bold md:text-5xl">
            Silk Road Runners
            <br />
            Blog
          </h1>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-gray-50">
                <div className="relative h-64 w-full">
                  <Image src="/ozod.png" alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
                  <p className="mb-4 text-sm text-gray-500">{post.date}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block rounded-md bg-[#D9A84E] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c99a47]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
