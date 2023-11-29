import Image from 'next/image'

export default function Footer() {
  return (
    <div className="py-3 px-5 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="flex justify-center p-2">
        <div className="relative h-20 w-20">
          <Image src={`/assets/images/logo-icon.jpeg`} fill={true} />
        </div>
      </div>
      <div className="mx-auto" >
        <h2 className="mt-4 text-start text-lg font-bold text-white ">
          Navigation
        </h2>
        <p className="p-1 text-start text-sm text-white">
          <a href="#home">Home </a>
        </p>
        <p className="p-1 text-start text-sm text-white">About Us</p>
        <p className="p-1 text-start text-sm text-white">
          <a href="#services">Our Work </a>
        </p>
        <p className="p-1 text-start text-sm text-white">Our Clients</p>
        <p className="p-1 text-start text-sm text-white">
          <a href="#contact-us">Contact Us</a>
        </p>
        <h2 className="mt-4 text-start text-lg font-bold text-white ">
          Contact Us
        </h2>
        <p className="p-1 text-start text-sm text-white">
          307,C,BLOCK,DDA MARKET VIKAS PURI,WEST DELHI, DELHI 110018
        </p>
        <p className="p-1 text-start text-sm text-white">8447338223</p>
        <p className="p-1 text-start text-sm text-white">
          nikhil.ngadvertisement@gmail.com
        </p>
        <h2 className="mt-4 text-start text-lg font-bold text-white ">
          Get Connected
        </h2>
      </div>
      <div className="mt-2 flex items-center justify-start space-x-4 pb-3">
        <img
          className="h-7 w-7"
          src="/assets/icons/facebook-icon.svg"
          alt="facebook-icon"
        ></img>
        <img
          className="h-7 w-7"
          src="/assets/icons/instagram-icon.svg"
          alt="instagram-icon"
        ></img>
        <img
          className="h-7 w-7"
          src="/assets/icons/twitter-icon.svg"
          alt="twitter-icon"
        ></img>
      </div>
    </div>
  )
}
