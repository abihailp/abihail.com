
'use client'
import { stringify } from 'querystring';
// import  react  from 'react';
import { useState }  from 'react';

export default function Home() {
const [menuOpen, setMenu] = useState(true);
const [openModal, setModal] = useState(true);

const Images = [{ id: 1, src: "nlm.PNG"},
  {id: 2, src: "orlando.PNG"},
  {id: 3, src: "roadjump.PNG"},
  {id: 4, src: "image1.PNG"}];

const [activeIndex, setIndex] = useState(Images[0].src)




function Open() {
setMenu(false)
}

function Close() {
  setMenu(false)
}

const var1 = [...Images]
let m2 = var1[1]
let m3 = var1[2]
let m4 = var1[3]

function OpenModal(e) {
  var1.map(e => { return var1 
  })
  setIndex(e)
  setModal(false)
}




function CloseModal() {
  setModal(true)
}
let m1 = var1[Number(activeIndex)]
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
         <div className="mobile-content sm:hidden  my-10">

      <div className="intro bg-white rounded-sm shadow-sm mb-10 w-95/100 mx-auto p-5">
      <h1 className="font-semibold text-3xl text-cyan-900 mx-auto">Game Dev - React, JS, C#</h1>
    <p className="text-md pt-5 mx-auto">Hi, my name is Abihail Petit-Frere. </p>
    <p className="text-md mx-auto">I am a software engineer from Miami, FL.</p>
    </div>
            <div className="work bg-white rounded-sm shadow-sm px-10 pt-5 my-10">
 <h1 className="font-semibold mx-auto my-7
    .5">Projects</h1>
    <ul className="text-md py-5">
      <li className="pt-5"><strong>nolimits-marketing.com - Web Development</strong></li>
      <p className="font-semibold">07/2026</p>
      <p className="p-2.5 pl-10">With a Figma design project I created a Wordpress template that I styled using Elementor and HTML.</p>
      <a href="#" ><img src="nlm.PNG" width="100%"/></a>
      {!openModal && <div className="base:hidden"><img src="nlm.PNG" width="200%" /></div>}
      <li className="pt-5"><strong>Concert Tickets</strong></li>
      <p className="font-semibold">09/2026</p>
      <p className="py-2.5 pl-10"> Using React I created a ticket inventory checker, that uses Ticketmaster's API to check for event availability.</p>
      <img src="orlando.PNG" width="100%" />
      <li className="pt-5"><strong>Road Jump</strong></li>
      <p className="font-semibold">09/2026</p>
      <p className="pt-5 pl-10">Starting with React and Next.Js, I created a browser game where the objective is to get to other side of the street using the directional arrows as controls.</p>
      <img src="roadjump.PNG" width="100%" />
      <li className="pt-5"><strong>Portfolio Website</strong></li>
      <p className="font-semibold">10/2026</p>
      <p className="pl-10 pt-2.5">Using NextJs and plain CSS I created a portfolio website displaying all of my projects.</p>
      <li className="pt-5"><strong>Pix_ - 2D Game</strong></li>
      <p className="font-semibold">11/2026</p>
      <p className="py-5 pl-10">I created a game called Pix_ using a python like language that works on browser. 
        <img src="image1.svg" width='100%' className="pb-5"/> <a href="/Pix_.html" className="pl-15" >Click <strong> here </strong>to play.</a></p>
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
   
    <div className="work bg-white rounded-sm shadow-sm pt-5 pl-50 my-10 justify-end align-right mx-auto">
    <h1 className="font-semibold mx-auto my-7
    .5">Projects</h1>
    <ul className="text-md py-5 pl-50 mx-auto">
      <li className="pt-5"><strong>nolimits-marketing.com - Web Development</strong></li>
      <p className="font-semibold">07/2026</p>
      <p className="p-2.5 my-5">With a Figma design project I created a Wordpress template that I styled using Elementor and HTML.</p>
      <a href="#frame" onClick={((e) => OpenModal(0))}><img src="nlm.PNG" width="50%"/></a>
      <li className="pt-5"><strong>Concert Tickets</strong></li>
      <p className="font-semibold">09/2026</p>
      <p className="py-2.5 my-5"> Using React and CSS, I created a ticket inventory checker that uses Ticketmaster's API to check for concert availability.</p>
      <a href="#frame" onClick={((e) => OpenModal(1))}><img src="orlando.PNG" width="50%" /></a>
      <li className="pt-5"><strong>Road Jump</strong></li>
      <p className="font-semibold">09/2026</p>
      <p className="pb-5 mt-5">Starting with React and Next.Js, I created a browser game where the objective is to get to other side of the street using the directional arrows as controls.</p>
      <a href="#frame" onClick={((e) => OpenModal(2))}><img src="roadjump.PNG" width="50%" /></a>    
     
      <li className="pt-5"><strong>Portfolio Website</strong></li>
      <p className="font-semibold">10/2026</p>
      <p className="pl-10 py-2.5">Using NextJs and plain CSS I created a portfolio website displaying all of my projects.</p>
      <li className="pt-5"><strong>Pix_ - 2D Game</strong></li>
      <p className="font-semibold">11/2026</p>
      <p className="pb-5 my-5">I created a game called Pix_ using a python like language that works on browser.</p>
      <a href="#frame" onClick={((e) => OpenModal(3))}><img src="image1.PNG" width='50%' className="pb-5 pl-5"/> </a><a href="/Pix_.html" className="pl-15" >Click <strong> here </strong>to play.</a>
      

    </ul>
    </div>
    </div>
 </div>
  </div>

{!openModal && <a href="#"><iframe id="frame" width="75%" height="1000px" src={m1.src} className="frame fixed bg-white/50 inset-0 z-20 top-25 left-25 mx-auto justify-center items-center"><div className="litebox z-1000 inset-0 fixed w-full mx-auto"><img width="1000px" src={m1.src} height="1000px" /></div><button className="bg-blue fixed top-50 z-1000 w-30 rounded-lg"></button></iframe> </a>}
{openModal ?? close }
    </main>
   
</div>

)


}