
export default function Home() {

return (
  <div className="body flex w-full">
    <main className="content grid mx-auto">
    <div className="header mx-auto justify-center items-center mt-10 px-5">
    <a href="#" className="nav-1 px-5 text-lg">Home</a><a href="#" className="nav-2 px5 text-lg">About me</a><a href="#" className="nav-3 px-5 text-lg">Blog</a><a href="#" className="nav-4 text-lg">resume</a>
    </div>
    <div className="page_1 w-full py-10 mt-10 mx-auto justify-center items-center">
    <h1 className="font-semibold text-3xl text-cyan-900 mx-auto">Abihail Petit-Frere - Software Engineer</h1>
    <p className="text-md pt-5 mx-auto">Hi, my name is Abihail Petit-Frere. </p>
    <p className="text-md mx-auto">I am a software engineer from Miami, FL.</p>

    <p className="p1 text-xxl font-semibold pt-5 mx-auto my-7
    .5">I love coding, and here are my latest projects:</p>
    <ul className="text-md py-5">
      <li className="pt-5 pl-5"><strong>nolimits-marketing.com - Web Development</strong></li>
      <p className="font-semibold pl-5">07/2026</p>
      <p className="p-2.5 pl-10">With a Figma design project I created a Wordpress template that I styled using Elementor and HTML.</p>
      <li className="pt-5 pl-5"><strong>Concert Tickets</strong></li>
      <p className="font-semibold pl-5">09/2026</p>
      <p className="pt-2.5 pl-10"> Using Next.JS I created a ticket inventory checker that uses Ticketmaster API to check for concert availability.</p>
      <li className="pt-5 pl-5"><strong>Road Jump</strong></li>
      <p className="font-semibold pl-5">09/2026</p>
      <p className="pt-5 pl-10">Starting with React and Next.Js, I created a browser game where the objective is to get to other side of the street using the directional arrows as controls.</p>
      <li className="pt-5 pl-5"><strong>Portfolio Website</strong></li>
      <p className="font-semibold pl-5">10/2026</p>
      <p className="pl-10 pt-2.5">Using NextJs and plain CSS I created a portfolio website displaying all of my projects.</p>
    </ul>
    </div>
    </main>
</div>

)


}