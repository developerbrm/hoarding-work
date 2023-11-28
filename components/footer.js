export default function Footer() {
  return (
    <div className="space-x-2 bg-gradient-to-b from-slate-600 to-slate-800">
      <p>logo</p>
      <h2 className="text-center text-lg font-bold text-white ">Navigation</h2>
      <p className="p-1 text-sm text-white"><a href="#home">Home </a></p>
      <p className="p-1 text-sm text-white">About Us</p>
      <p className="p-1 text-sm text-white"><a href='#services'>Our Work </a></p>
      <p className="p-1 text-sm text-white">Our Clients</p>
      <p className="p-1 text-sm text-white"><a href='#contact-us'>Contact Us</a></p>
      <h2 className="text-center text-lg font-bold text-white ">Contact Us</h2>
      <p className="p-1 text-sm text-white">
        307,C,BLOCK,DDA MARKET VIKAS PURI,WEST DELHI, DELHI 110018
      </p>
      <p className="p-1 text-sm text-white">8447338223</p>
      <p className="p-1 text-sm text-white">nikhil.ngadvertisement@gmail.com</p>
      <h2 className="text-center text-lg font-bold text-white ">
        Get Connected
      </h2>
      <div className="mt-2 flex items-center justify-center space-x-4 pb-3">
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
