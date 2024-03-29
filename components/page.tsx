import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-20 bg-bright-red flex">
      <div className="container relative mx-auto flex items-center justify-end">
        <Link href="/" className="absolute left-0">
          <Image
            src="/assets/logo.svg"
            width={65}
            height={40}
            alt="645 Ventures"
          />
        </Link>

        <nav className="justify-end flex gap-14 items-center font-bold text-black-gray transition duration-500">
          <Link
            href="#About"
            className="hover:text-white duration-500 transition-colors"
          >
            About the Event
          </Link>
          <Link
            href="#Schedule"
            className="hover:text-white duration-500 transition-colors"
          >
            Schedule
          </Link>
          <Link
            href="#Speakers"
            className="hover:text-white duration-500 transition-colors"
          >
            Speakers
          </Link>
          <Link href="/register" className="lg:hidden">
            Register
          </Link>

          <Link
            href="/register "
            className="rounded-full border-inherit border px-7 py-1 text-white transition duration-500 hover:text-white hover:bg-black-gray hover:border-black-gray"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
