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
  <div className="header grid md:mt-10 lg:pl-50">

    <div className="nav lg:mx-auto"><div className="title lg:absolute px-5 left-100"><h2>Abihail P.</h2><h2 className="text-gray-400">Software Engineer</h2></div>
    <img className="picture lg:absolute left-50 w-50" src="./frame3.webp" />
    <div className="mobile">
    <a href="#"><button className="ham sm:hidden absolute  left-80 top-40" onClick={Open}><img src="g5.svg"></img></button></a>
    {!menuOpen && <div className="mobile-menu md:hidden">
    <a href="/" className="nav-1 px-5 text-xl font-semibold">Home</a><a href="/projects" className="nav-2 px5 text-xl font-semibold">About me</a><a href="#" className="nav-3 px-5 text-xl font-semibold">Blog</a><a href="#" className="nav-4 text-xl font-semibold">Contact</a></div>}
    <div className="menu "><a href="/" className="nav-1 px-5 text-xl font-semibold">Home</a><a href="/projects" className="nav-2 px5 text-xl font-semibold">About me</a><a href="#" className="nav-3 px-5 text-xl font-semibold">Blog</a><a href="#" className="nav-4 text-xl font-semibold">Contact</a></div>
    </div>
    </div>
    </div>
       <main>

    <div className="mobile-content sm:hidden">
      
    <div className="work bg-white rounded-sm shadow-sm px-10 pt-5 my-10">
    <h1 className="font-semibold mx-auto my-7
    .5">Contact Info</h1>
   <div className="contact-mobile p-10 mx-auto bg-white w-full">
    <p>You can reach me via e-mail: info@abihail.com or by phone: 317-434-4235</p>
   </div>

</div>
</div>
<div className="content">
<div className="work bg-white rounded-sm shadow-sm px-10 pt-5 my-10">
<h1 className="font-semibold mx-auto my-7.5">Contact Info</h1>
<div className="contact"><p className="p-20">You can reach me via e-mail: info@abihail.com or by phone: 317-434-4235</p></div>

</div>
</div>



  
    </main>
   
</div>

)


}