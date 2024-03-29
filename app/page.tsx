import Header from "@/components/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between mt-5 lg:mt-10">
        <div className="container">
          <section
            id="Call"
            className="call-section relative w-full h-638 md:h-825 flex items-center justify-center text-white"
          >
            <div className="w-full h-full absolute t-0 l-0 z-10 main-bg-img bg-cover">
              <div className="bg-white w-full h-full opacity-18"></div>
            </div>

            <div className="absolute top-6 left-0 z-10 px-14">
              <h3 className="text-base md:text-2.5xl font-medium">
                2023 Annual Meeting:
              </h3>
              <h2 className="text-4xl md:text-7.5xl leading-8 md:leading-90">
                AI’s Readiness for Primetime and NYC’s Building Blocks for Tech
                Innovation
              </h2>
            </div>

            <Link
              href="/register"
              className="z-10 bg-bright-red rounded-full text-black-gray font-semibold py-2 px-12 transition duration-500 hover:bg-black-gray hover:text-white"
            >
              Register Now
            </Link>

            <div className="absolute px-14 md:px-0 bottom-8 md:right-10 gap-9 flex z-10">
              <h2 className="text-4xl md:text-7.5xl leading-8 md:leading-90">
                June 8, 2023
              </h2>
              <div className="flex-col text-2.5xl hidden md:visible md:flex">
                <h3>9:00 AM EST</h3>
                <h3>New York</h3>
              </div>
            </div>
          </section>

          <div className="page-content px-14 pb-28">
            <section id="About" className="grid grid-cols-12 mt-20">
              <div className="col-span-12 md:col-span-7">
                <h2 className="border-b pb-1 mb-3 font-bold">
                  About the Event
                </h2>
                <p className="mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a massa orci. Suspendisse potenti. Nunc sed elit
                  quis enim consequat pellentesque in id massa. Morbi quis eros
                  ut ligula interdum sodales. Integer eget turpis odio. Maecenas
                  leo elit, congue ac tincidunt et, tempor sit amet erat. Links
                  can be added here also.
                </p>
                <Link
                  href="/register"
                  className="mt-8 inline-block py-2 px-12 text-white bg-bright-red rounded-full hover:bg-black-gray transition duration-500"
                >
                  Register Now
                </Link>
              </div>
            </section>
          </div>
        </div>

        <section id="Schedule" className="flex bg-white w-full pt-12 pb-28">
          <div className="container mx-auto px-14">
            <div className="flex justify-between font-bold text-3xl md:text-5.5xl leading-7 md:leading-47">
              <h2>
                Schedule <br />
                2023
              </h2>
              <h2 className="text-right">
                Times in <br />
                ET
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10 md:pt-28">
              <div className="topic">
                <h4 className="border-b pb-1 mb-3">9:30 AM</h4>
                <p className="py-2">Breakfast and coffee</p>
              </div>

              <div className="topic">
                <h4 className="border-b pb-1 mb-3">11:45 AM</h4>
                <p className="py-2">Coffee and Snack Break</p>
                <p className="py-2">Welcome and Check In</p>
              </div>

              <div className="topic">
                <h4 className="border-b pb-1 mb-3">1:15 PM</h4>
                <p className="py-2">The Evolution of the NYC Ecosystem</p>
              </div>

              <div className="topic">
                <h4 className="border-b pb-1 mb-3">10:00 PM</h4>
                <p className="py-2">Firm Strategy and Performance</p>
              </div>

              <div className="topic">
                <h4 className="border-b pb-1 mb-3">12:15 PM</h4>
                <p className="py-2">Defining Responsible AI</p>
              </div>

              <div className="topic">
                <h4 className="border-b pb-1 mb-3">1:45 PM</h4>
                <p className="py-2">SHORT BREAK</p>
              </div>

              <div className="topic">
                <h4 className="border-b pb-1 mb-3">11:00 PM</h4>
                <p className="py-2">645 Portfolio Spotlights</p>
              </div>

              <div className="topic">
                <h4 className="border-b pb-1 mb-3">1:05 PM</h4>
                <p className="py-2">SHORT BREAK</p>
              </div>

              <div className="topic">
                <h4 className="border-b pb-1 mb-3">2:00 PM</h4>
                <p className="py-2">
                  The Past was Strong and the Future Bright
                </p>
              </div>

              <div className="topic">
                <h4 className="border-b pb-1 mb-3">2:30 PM - 3:30 PM</h4>
                <p className="py-2">LUNCH</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="min-h-64 bg-gradient-to-r from-[#FF731D] to-[#FF0000]"></footer>
    </>
  );
}
