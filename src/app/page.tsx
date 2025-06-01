import Navbar from "@/components/navbar";

export default function Home() {
  return (
   <div className="w-screen h-screen p-10 m-0">
    {/* here navbar */}
    <Navbar/>


    {/* here main content :
      - photo to beach 
      - the service to lido
      - the rates
      - comments from the customers
      - where are we located
    */}
    <section id="main-content"></section>
    <section id="services"></section>
    <section id="rates"></section>
    <section id="comments"></section>
    <section id="location"></section>

    {/* here footer */}
    <footer>
      <h1>ShellLido</h1>
      <p>Copyright 2025 ShellLido</p>
    </footer>
   </div>
  );
}
