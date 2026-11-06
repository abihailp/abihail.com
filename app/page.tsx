
'use client'
// import  react  from 'react';
import { useState }  from 'react';

export default function Home() {
const [menuOpen, setMenu] = useState(true);

function Open() {
setMenu(false)
}

function Close() {
  setMenu(false)
}

return (
  <div className="body">
        <div className="contact absolute text-lg md:right-10 right-15 top-10 text-blue-500 pb-5 px-10">
          <b>info@abihail.com</b></div>
    <div className="contact2 absolute text-md md:right-10 right-15 text-blue-500 pt-5 px-10">317-434-4235</div>
  <div className="header lg:grid md:mt-10 lg:pl-50">

    <div className="nav lg:mx-auto"><div className="title lg:absolute px-5 left-100"><h2>Abihail P.</h2><h2 className="text-gray-400">Software Engineer</h2></div>
    <img className="picture lg:absolute left-50 w-50" src="frame3.webp" />
    <div className="mobile">
    <a href="#"><button className="ham absolute sm:hidden  left-80 top-40" onClick={Open}><img src="g5.svg"></img></button></a>
    {!menuOpen && <div className="mobile-menu md:hidden">
    <a href="/" className="nav-1 px-5 text-xl font-semibold">Home</a><a href="/projects" className="nav-2 px5 text-xl font-semibold">About me</a><a href="#" className="nav-3 px-5 text-xl font-semibold">Blog</a><a href="/contact" className="nav-4 text-xl font-semibold">Contact</a></div>}
    <div className="menu "><a href="/" className="nav-1 px-5 text-xl font-semibold">Home</a><a href="/projects" className="nav-2 px5 text-xl font-semibold">About me</a><a href="#" className="nav-3 px-5 text-xl font-semibold">Blog</a><a href="/contact" className="nav-4 text-xl font-semibold">Contact</a></div>
    </div>
    </div>
    </div>
       <main>
         <div className="mobile-content sm:hidden my-10">

      <div className="intro bg-white rounded-sm md:w-3/10 shadow-sm p-5 md:ml-60 mb-10">
      <h1 className="font-semibold text-3xl text-cyan-900 mx-auto">Game Dev - React, JS, C#</h1>
    <p className="text-md pt-5 mx-auto">Hi, my name is Abihail Petit-Frere. </p>
    <p className="text-md mx-auto">I am a software engineer from Miami, FL.</p>
    </div>
            <div className="work bg-white rounded-sm shadow-sm px-10 pt-5 my-10">
 <h1 className="font-semibold mx-auto my-7
    .5">Projects</h1>
    <ul className="text-md py-5">
      <li className="pt-5 pl-5"><strong>Pix_ - 2D Game</strong></li>
      <p className="font-semibold pl-5">11/2026</p>
      <p className="py-5 pl-10">I created a game called Pix_ using a python like language that works on browser. 
        <img src="image1.svg" width='100%' className="pb-5"/> <a href="/Pix_.html" className="pl-15" >Click <strong> here </strong>to play.</a></p>
      <li className="pt-5 pl-5"><strong>nolimits-marketing.com - Web Development</strong></li>
      <p className="font-semibold pl-5">07/2026</p>
      <p className="p-2.5 pl-10">With a Figma design project I created a Wordpress template that I styled using Elementor and HTML.</p>
      <li className="pt-5 pl-5"><strong>Concert Tickets</strong></li>
      <p className="font-semibold pl-5">09/2026</p>
      <p className="py-2.5 pl-10"> Using React I created a ticket inventory checker, that uses Ticketmaster's API to check for event availability.</p>
      <img src="orlando.PNG" width="100%" />
      <li className="pt-5 pl-5"><strong>Road Jump</strong></li>
      <p className="font-semibold pl-5">09/2026</p>
      <p className="pt-5 pl-10">Starting with React and Next.Js, I created a browser game where the objective is to get to other side of the street using the directional arrows as controls.</p>
      <img src="roadjump.PNG" width="100%" />
      <li className="pt-5 pl-5"><strong>Portfolio Website</strong></li>
      <p className="font-semibold pl-5">10/2026</p>
      <p className="pl-10 pt-2.5">Using NextJs and plain CSS I created a portfolio website displaying all of my projects.</p>
      </ul>
    </div></div>
    <div className="content w-full">
    <div className="section1 flex">

    <div className="page_1 pt-10">
      <div className="intro bg-white rounded-sm md:w-3/10 shadow-sm p-5 md:ml-60 mb-10">
    <h1 className="font-semibold text-3xl text-cyan-900 mx-auto">Game Dev - React, JS, C#</h1>
    <p className="text-md pt-5 mx-auto">Hi, my name is Abihail Petit-Frere. </p>
    <p className="text-md mx-auto">I am a software engineer from Miami, FL.</p>
    </div>
   
    <div className="work bg-white rounded-sm shadow-sm px-10 pt-5 my-10">
    <h1 className="font-semibold mx-auto my-7
    .5">Projects</h1>
    <ul className="text-md py-5">
      <li className="pt-5 pl-5"><strong>Pix_ - 2D Game</strong></li>
      <p className="font-semibold pl-5">11/2026</p>
      <p className="py-5 pl-10">I created a game called Pix_ using a python like language that works on browser.</p>
      <img src="image1.svg" width='50%' className="pb-5 pl-5"/> <a href="/Pix_.html" className="pl-15" >Click <strong> here </strong>to play.</a>
      <li className="pt-5 pl-5"><strong>nolimits-marketing.com - Web Development</strong></li>
      <p className="font-semibold pl-5">07/2026</p>
      <p className="p-2.5 pl-10">With a Figma design project I created a Wordpress template that I styled using Elementor and HTML.</p>
      <li className="pt-5 pl-5"><strong>Concert Tickets</strong></li>
      <p className="font-semibold pl-5">09/2026</p>
      <p className="py-2.5 pl-10"> Using React and CSS, I created a ticket inventory checker that uses Ticketmaster's API to check for concert availability.</p>
      <img src="orlando.PNG" width="50%" />
      <li className="pt-5 pl-5"><strong>Road Jump</strong></li>
      <p className="font-semibold pl-5">09/2026</p>
      <p className="pt-5 pl-10">Starting with React and Next.Js, I created a browser game where the objective is to get to other side of the street using the directional arrows as controls.</p>
      <img src="roadjump.PNG" width="50%" />
      <li className="pt-5 pl-5"><strong>Portfolio Website</strong></li>
      <p className="font-semibold pl-5">10/2026</p>
      <p className="pl-10 pt-2.5">Using NextJs and plain CSS I created a portfolio website displaying all of my projects.</p>
      
    </ul>

    
    </div>
    </div>
 </div>
  </div>
    </main>
   
</div>

)


}