import Image from "next/image"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "ZAMIN marathon",
      date: "23",
      month: "07.25",
      image: "/images/marathon-event.jpg",
      tags: ["Running", "Upcomming"],
      status: "upcoming",
    },
    {
      id: 2,
      title: "ZAMIN marathon",
      date: "23",
      month: "07.25",
      image: "/images/marathon-event.jpg",
      tags: ["Running", "Past"],
      status: "past",
    },
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        {/* Event Listings */}
        <div className="space-y-16">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row">
              {/* Date Column */}
              <div className="mb-4 mr-8 flex flex-col md:mb-0 md:w-24">
                <span className="text-4xl font-bold">{event.date}</span>
                <span className="text-gray-600">{event.month}</span>
              </div>

              {/* Vertical Line */}
              <div className="hidden md:block">
                <div className="h-full w-px bg-gray-200"></div>
              </div>

              {/* Content Column */}
              <div className="flex-1 md:pl-8">
                <h2 className="mb-4 text-4xl font-bold">{event.title}</h2>

                {/* Tags */}
                <div className="mb-6 flex space-x-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`rounded-md px-4 py-1 text-sm text-white ${
                        tag === "Past" ? "bg-[#D9A84E]/80" : "bg-[#D9A84E]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Event Image */}
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/aboutRunning.jpg"
                    alt={event.title}
                    width={800}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
