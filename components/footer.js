import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-blue-950 px-5 py-3">
      <div className="flex justify-center p-2">
        <div className="relative h-20 w-20">
          <Image
            src={`/assets/images/logo-icon.jpeg`}
            fill={true}
            alt="logo icon"
          />
        </div>
      </div>
      <div className="mx-auto">
        <h2 className="mt-4 text-start text-lg font-bold text-white ">
          Navigation
        </h2>
        <p className="p-1 text-start text-sm text-white">
          <Link href="#home">Home </Link>
        </p>
        <Link
          href={`#status`}
          className="block p-1 text-start text-sm text-white"
        >
          About Us
        </Link>
        <p className="p-1 text-start text-sm text-white">
          <Link href="#our-works">Our Work </Link>
        </p>
        <Link
          href={`#our-clients`}
          className="block p-1 text-start text-sm text-white"
        >
          Our Clients
        </Link>
        <p className="p-1 text-start text-sm text-white">
          <Link href="#contact-us">Contact Us</Link>
        </p>
        <h2 className="mt-4 text-start text-lg font-bold text-white ">
          Contact Us
        </h2>
        <address className="p-1 text-start text-sm not-italic text-white">
          307,C,BLOCK,DDA MARKET VIKAS PURI,WEST DELHI, DELHI 110018
        </address>
        <Link
          href={`tel:8447338223`}
          className="block p-1 text-start text-sm text-white"
        >
          8447338223
        </Link>
        <Link
          href={`mailto:nikhil.ngadvertisement@gmail.com`}
          className="block p-1 text-start text-sm text-white"
        >
          nikhil.ngadvertisement@gmail.com
        </Link>
        <h2 className="mt-4 text-start text-lg font-bold text-white ">
          Get Connected
        </h2>
      </div>
      <div className="mt-2 flex items-center justify-start space-x-4 pb-3">
        <Image
          width={30}
          height={30}
          src="/assets/icons/facebook-icon.svg"
          alt="facebook-icon"
        ></Image>
        <Image
          width={30}
          height={30}
          src="/assets/icons/instagram-icon.svg"
          alt="instagram-icon"
        ></Image>
        <Image
          width={30}
          height={30}
          src="/assets/icons/twitter-icon.svg"
          alt="twitter-icon"
        ></Image>
      </div>
    </div>
  )
}
