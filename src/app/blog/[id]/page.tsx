import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "Training Tips for Your First Marathon",
    content: `
      <p>Preparing for your first marathon is an exciting journey that requires dedication, patience, and proper planning. Here are some essential tips to help you prepare effectively:</p>
      
      <h3>Start with a Solid Base</h3>
      <p>Before beginning marathon training, ensure you have a solid running base. You should be comfortable running at least 20-30 miles per week and able to complete a long run of 8-10 miles.</p>
      
      <h3>Follow a Training Plan</h3>
      <p>Find a reputable training plan that fits your experience level and goals. Most marathon training plans are 16-20 weeks long and include a mix of easy runs, speed work, and gradually increasing long runs.</p>
      
      <h3>The Importance of the Long Run</h3>
      <p>The weekly long run is the cornerstone of marathon training. Gradually increase your long run by no more than 10% each week, with a maximum of about 20-22 miles before race day.</p>
      
      <h3>Nutrition and Hydration</h3>
      <p>Practice your race-day nutrition strategy during training. Experiment with different energy gels, sports drinks, and whole foods to find what works best for you. Stay well-hydrated throughout your training.</p>
      
      <h3>Rest and Recovery</h3>
      <p>Rest days are as important as training days. They allow your body to recover and adapt to the training stress. Include at least one or two rest days per week in your schedule.</p>
      
      <h3>Cross-Training</h3>
      <p>Incorporate cross-training activities like swimming, cycling, or strength training to build overall fitness while reducing the risk of running-related injuries.</p>
      
      <h3>Proper Gear</h3>
      <p>Invest in good quality running shoes that suit your gait and running style. Replace them every 300-500 miles. Wear moisture-wicking clothing to stay comfortable during long runs.</p>
      
      <h3>Mental Preparation</h3>
      <p>Marathon running is as much a mental challenge as a physical one. Practice visualization techniques, set realistic goals, and develop strategies to stay motivated during tough moments.</p>
      
      <h3>Tapering</h3>
      <p>In the final 2-3 weeks before the marathon, gradually reduce your training volume to allow your body to fully recover and prepare for race day. This doesn't mean complete rest – just reduced mileage.</p>
      
      <h3>Race Day Strategy</h3>
      <p>Plan your race day carefully. Start slower than you think you should, maintain a consistent pace, and save energy for the final miles. Remember to enjoy the experience – it's your first marathon!</p>
    `,
    image: "/images/blog-1.jpg",
    date: "April 10, 2025",
    author: "Alex Johnson",
    authorImage: "/images/team-1.jpg",
  },
  // Additional blog posts would be defined here
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1000}
              height={500}
              className="h-[400px] w-full object-cover"
            />
          </div>

          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>

          <div className="mb-8 flex items-center">
            <Image
              src={post.authorImage || "/placeholder.svg"}
              alt={post.author}
              width={50}
              height={50}
              className="mr-4 rounded-full"
            />
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-12 flex justify-between">
            <Link href="/blogs">
              <Button variant="outline">← Back to Blogs</Button>
            </Link>

            <div className="flex space-x-4">
              <Button variant="ghost" className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-share-2"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <span>Share</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bookmark"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
                <span>Save</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
