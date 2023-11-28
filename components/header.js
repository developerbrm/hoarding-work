export default function Header (){
    return ( 
        <header className="bg-gray-800 p-4">
        <div className="text-white text-xl font-bold">Your Logo</div> 

        <nav className="space-x-4">
          <a href="#home" className="text-white">Home</a>
          <a href ='#about' className="text-white">About</a>
          <a href='#services' className="text-white">Services</a>
          <a href='#contact-us' className="text-white">Contact</a>
        </nav>
      </header>      
 )
}