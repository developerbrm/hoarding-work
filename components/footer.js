import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-950 px-5 py-3 md:py-10 lg:py-16">
      <div className="flex justify-center p-2">
        <div className="relative h-20 w-20">
          <Image
            src={`/assets/images/logo-icon.jpeg`}
            fill={true}
            alt="logo icon"
          />
        </div>
      </div>
      <div className="mx-auto grid md:grid-cols-3">
        <div className="">
          <h2 className="mb-2 mt-4 text-start text-2xl font-bold text-white ">
            Navigation
          </h2>
          <div className="pl-1 text-base md:pl-0">
            <p className="text-start text-white">
              <Link href="#home">Home </Link>
            </p>
            <Link href={`#status`} className="block text-start text-white">
              About Us
            </Link>
            <p className="text-start text-white">
              <Link href="#our-works">Our Work </Link>
            </p>
            <Link href={`#our-clients`} className="block text-start text-white">
              Our Clients
            </Link>
            <p className="text-start text-white">
              <Link href="#contact-us">Contact Us</Link>
            </p>
          </div>
        </div>
        <div>
          <h2 className="mb-2 mt-4 text-start text-2xl font-bold text-white ">
            Contact Us
          </h2>
          <div className="pl-1 text-base md:pl-0">
            <address className="max-w-[25ch] text-start not-italic text-white">
              307,C,BLOCK,DDA MARKET VIKAS PURI,WEST DELHI, DELHI 110018
            </address>
            <Link
              href={`tel:8447338223`}
              className="block text-start text-white"
            >
              8447338223
            </Link>
            <Link
              href={`mailto:nikhil.ngadvertisement@gmail.com`}
              className="block text-start text-white"
            >
              nikhil.ngadvertisement@gmail.com
            </Link>
          </div>
        </div>

        <div>
          <h2 className="mb-2 mt-4 text-start text-2xl font-bold text-white ">
            Get Connected
          </h2>
          <div className="">
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
        </div>
      </div>
    </div>
  )
}
