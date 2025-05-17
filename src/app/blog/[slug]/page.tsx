import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  return {
    title: "#5 Freshman Uni Insiders at Princeton",
    date: "10th October",
    author: "Bekmurodov Ozodbek",
    authorImage: "/images/blog-author.jpg",
    content: `
      <p>Freshman Academy prepares high school students for admission to the world's top universities with partial or full scholarships. Freshman Academy was founded in 2019 by a team of Yale-NUS students.</p>
      
      <p>Since then, Freshman's graduates were admitted to Harvard, Yale, Princeton, Columbia, Stanford, Berkeley, Babson, and many more. In this blog post, we'll share insights from our Princeton insiders.</p>
      
      <h2>What Makes Princeton Special</h2>
      
      <p>Princeton University, founded in 1746, is renowned for its commitment to undergraduate teaching, research opportunities, and generous financial aid. Located in Princeton, New Jersey, the university offers a perfect blend of a small-town atmosphere with easy access to major cities like New York and Philadelphia.</p>
      
      <p>Our insiders highlight the close-knit community, the residential college system, and the emphasis on independent work as key aspects that make Princeton unique among Ivy League institutions.</p>
      
      <h2>Application Tips from Princeton Students</h2>
      
      <p>Current Princeton students emphasize the importance of authenticity in your application. The admissions committee is looking for students who will contribute to the campus community in meaningful ways.</p>
      
      <p>Some specific tips include:</p>
      
      <ul>
        <li>Focus on depth rather than breadth in extracurricular activities</li>
        <li>Use your essays to showcase your unique voice and perspective</li>
        <li>Demonstrate intellectual curiosity and a love of learning</li>
        <li>Highlight leadership experiences and community involvement</li>
      </ul>
      
      <p>Remember that Princeton has a holistic admissions process, considering all aspects of your application rather than focusing solely on grades and test scores.</p>
      
      <h2>Life at Princeton</h2>
      
      <p>Princeton offers a vibrant campus life with over 300 student organizations, Division I athletics, and a strong tradition of eating clubs. The university's focus on undergraduate education means that professors are accessible and engaged with students.</p>
      
      <p>Our insiders note that the workload is challenging but manageable with good time management skills. The support systems in place, including academic advisors, residential college staff, and peer tutors, help students navigate the demands of a Princeton education.</p>
      
      <h2>Financial Aid</h2>
      
      <p>Princeton has one of the most generous financial aid programs in the country. The university meets 100% of demonstrated financial need and provides aid in the form of grants rather than loans, meaning students can graduate debt-free.</p>
      
      <p>International students are eligible for the same financial aid as domestic students, making Princeton accessible to talented students from around the world.</p>
    `,
    image: "/images/blog-header.jpg",
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <main className="min-h-screen bg-white pt-20">
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={600}
            className="h-[400px] w-full object-cover"
          />
        </div>

        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>

        <div className="mb-8 flex items-center">
          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={post.authorImage || "/placeholder.svg"}
              alt={post.author}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{post.author}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </div>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-block rounded-md bg-[#D9A84E] px-6 py-2 font-medium text-white transition-colors hover:bg-[#c99a47]"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  )
}
