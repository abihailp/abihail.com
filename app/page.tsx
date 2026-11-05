
export default function Home() {

return (
  <div className="body">
  <div className="header grid md:mt-10 lg:pl-50">
    <div className="nav lg:mx-auto"><div className="title lg:absolute px-5 left-100"><h2>Abihail P.</h2><h2 className="text-gray-400">Software Engineer</h2></div>
    <img className="picture lg:absolute left-50 w-50" src="frame3.webp" />
    <div className="links ">
    <a href="#" className="nav-1 px-5 text-xl font-semibold">Home</a><a href="#" className="nav-2 px5 text-xl font-semibold">About me</a><a href="#" className="nav-3 px-5 text-xl font-semibold">Blog</a><a href="#" className="nav-4 text-xl font-semibold">resume</a>
    </div>
    <a href="#"><img className="ham sm:hidden absolute left-100 w-1/10 top-40" src="g5.svg"></img></a>
    </div>
    </div>
       <main className="content flex">
    <div className="section1 flex">

    <div className="page_1 pt-10">
      <div className="intro bg-white rounded-sm md:w-3/10 shadow-sm p-5 md:ml-60 mb-10">
    <h1 className="font-semibold text-3xl text-cyan-900 mx-auto">Game Dev - React, JS, C#</h1>
    <p className="text-md pt-5 mx-auto">Hi, my name is Abihail Petit-Frere. </p>
    <p className="text-md mx-auto">I am a software engineer from Miami, FL.</p>
    </div>
   
    <div className="work bg-white rounded-sm shadow-sm px-10 pt-5 my-10">
    <p className="p1 text-xxl font-semibold mx-auto my-7
    .5">Here are some of my projects:</p>
    <ul className="text-md py-5">
      <li className="pt-5 pl-5"><strong>Pix_ - 2D Game</strong></li>
      <p className="font-semibold pl-5">11/2026</p>
      <p className="py-5 pl-10">I created a game called Pix_ using a python like language that works on browser. <a href="/Pix_.html"><strong>Click here to play it.</strong></a></p>
      <li className="pt-5 pl-5"><strong>nolimits-marketing.com - Web Development</strong></li>
      <p className="font-semibold pl-5">07/2026</p>
      <p className="p-2.5 pl-10">With a Figma design project I created a Wordpress template that I styled using Elementor and HTML.</p>
      <li className="pt-5 pl-5"><strong>Concert Tickets</strong></li>
      <p className="font-semibold pl-5">09/2026</p>
      <p className="py-2.5 pl-10"> Using Next.JS I created a ticket inventory checker that uses Ticketmaster API to check for concert availability.</p>
      <li className="pt-5 pl-5"><strong>Road Jump</strong></li>
      <p className="font-semibold pl-5">09/2026</p>
      <p className="pt-5 pl-10">Starting with React and Next.Js, I created a browser game where the objective is to get to other side of the street using the directional arrows as controls.</p>
      <li className="pt-5 pl-5"><strong>Portfolio Website</strong></li>
      <p className="font-semibold pl-5">10/2026</p>
      <p className="pl-10 pt-2.5">Using NextJs and plain CSS I created a portfolio website displaying all of my projects.</p>
      
    </ul>

    </div>
 </div>
  </div>
    </main>
   
</div>

)


}