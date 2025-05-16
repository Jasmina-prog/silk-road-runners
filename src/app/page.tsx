import Button from "../../components/Button";
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
export default function Home() {
  return (
    <>
    {/* Hero Section */}
    <section className="relative h-screen w-full bg-black text-white">
        <div className="absolute inset-0 z-0">
          {/* <Image src="/images/hero-bg.jpg" alt="Runners at sunset" fill className="object-cover opacity-60" priority /> */}
          {/* <img src="/showcase_silk.jpg" className="object-cover opacity-60 bg-no-repeat bg-center bg-cover" alt="" /> */}
          <div className="bg-no-repeat bg-center bg-cover w-full h-[1000px] brightness-80" style={{ backgroundImage: "url('/showcase_silk.jpg')" }}></div>
        </div>
        <div className="relative z-10 flex h-full flex-col items-start justify-center px-4 md:px-16 lg:px-24">
          <h1 className="mb-4 max-w-2xl text-4xl font-bold md:text-5xl lg:text-6xl">
            It is not just about <span className="text-orange-500">running</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg text-gray-300">
            Join our community of passionate runners exploring the historic Silk Road routes
          </p>
          {/* <Button className="bg-orange-500 px-8 py-3 text-white hover:bg-orange-600">Join Us</Button> */}
          <Button name="Join us"/>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 mt-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 md:grid-cols-3 md:px-8">
          <div className="flex flex-col items-center justify-center bg-gray-50 p-8 text-center">
            <span className="mb-2 text-5xl font-bold text-[#D9A84E]">+3</span>
            <span className="text-gray-600">MARATHON TRIPS</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-50 p-8 text-center">
            <span className="mb-2 text-5xl font-bold text-[#D9A84E]">+200</span>
            <span className="text-gray-600">Hours of training sessions</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-50 p-8 text-center">
            <span className="mb-2 text-5xl font-bold text-[#D9A84E]">+60</span>
            <span className="text-gray-600">Members in all events</span>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <Image
                src="/aboutsec.png"
                alt="Silk Road Runners Team"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative">
              <h2 className="mb-6 text-4xl font-bold">About us</h2>
              <p className="mb-4 text-gray-700">
                Freshman Academy prepares high school students for admission to the world's top universities with
                partial or full scholarships. Freshman Academy was founded in 2019 by a team of Yale-NUS students.
              </p>
              <p className="mb-6 text-gray-700">
                Since then, Freshman's graduates were admitted to Harvard, Yale, Princeton, Columbia, Stanford,
                Berkeley, Babson, and many more.
              </p>
              <p className="mb-6 text-gray-700">
                Freshman Academy prepares high school students for admission to the world's top universities with
                partial or full scholarships.
              </p>
              <Link
                href="#"
                className="rounded-md bg-[#D9A84E] px-6 py-2 font-medium text-white transition-colors hover:bg-[#c99a47]"
              >
                Learn more
              </Link>

              {/* Decorative element */}
              <div className="absolute -bottom-16 -right-16 hidden opacity-20 md:block">
                <Image src="/images/decorative-pattern.png" alt="" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="mb-8 text-4xl font-bold">Upcoming Events</h2>

          <div className="mb-8 overflow-hidden rounded-lg bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1">
                <Image
                  src="/gulchapchap.png"
                  alt="Teshaboyeva Gulchapchap"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:col-span-2">
                <h3 className="mb-4 text-2xl font-bold">Teshaboyeva Gulchapchap</h3>
                <div className="mb-4 h-1 w-24 bg-[#D9A84E]"></div>
                <p className="mb-4 text-gray-500">ALWIUT'92</p>
                <p className="text-gray-700">
                  Teshaboyeva Gulchapchap is really hard-working IVY League level student. She currently works as a
                  director of weather. Whener she is mad, you can see rain outside because she it fat and ugly
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="order-2 p-8 md:order-1 md:col-span-2">
                <h3 className="mb-4 text-2xl font-bold">Teshaboyeva Gulchapchap</h3>
                <div className="mb-4 h-1 w-24 bg-[#D9A84E]"></div>
                <p className="mb-4 text-gray-500">ALWIUT'92</p>
                <p className="text-gray-700">
                  Teshaboyeva Gulchapchap is really hard-working IVY League level student. She currently works as a
                  director of weather. Whener she is mad, you can see rain outside because she it fat and ugly
                </p>
              </div>
              <div className="order-1 md:order-2 md:col-span-1">
                <Image
                  src="/gulchapchap.png"
                  alt="Teshaboyeva Gulchapchap"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* Logos Section */}
       <section className="bg-gray-100 py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-4 md:px-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#9D2235]">
              <Image
                src="/satlogo.png"
                alt="Tashkent Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-normal">
                  What is "Silk Rode Runners?"
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  Silk Road Runners is a community of passionate runners dedicated to exploring the historic routes of
                  the Silk Road while promoting fitness and cultural exchange.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
    </>
  );
}
