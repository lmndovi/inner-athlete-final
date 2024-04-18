import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Contact from "./_components/Contact";
// import { auth } from "@clerk/nextjs";
import trees from "@/public/trees.jpg";
import AboutContent from "./_components/About";
import Navbar from "./_components/Navbar";

export default function Home() {
  // const { userId } = auth();

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      <nav>
        <Navbar />
      </nav>
      <main
        id="#main"
        className="flex flex-col justify-center items-center h-screen  space-y-5 snap-center"
      >
        <div>
          <Image
            src="/logoHeadingParagraph.svg"
            alt="Inner Athlete"
            height={500}
            width={300}
          />
        </div>
        <div className="flex space-x-2">
          {/* {!userId && ( */}
          <>
            <Link href="/sign-up">
              <Button variant="ghost">Join Us</Button>
            </Link>
          </>
          {/* )} */}

          <Link href="#about">
            <Button variant="ghost">Learn More</Button>
          </Link>
        </div>
      </main>
      <section
        id="about"
        className="flex-col space-y-16 p-5 pt-20 h-screen snap-center bg-[url('/10.png')] bg-center"
      >
        <AboutContent />
      </section>
      <section
        id="contact"
        className="flex-col space-y-8 p-5 pt-16 h-screen  snap-center"
      >
        <div>
          <Contact />
        </div>
      </section>
      {/* <section className="snap-center bg-blue-500">
        <Footer />
      </section> */}
    </div>
  );
}
