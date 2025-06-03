import Navbar from "@/components/navbar";
import Comments from "@/sectionPage/comments";
import DoveSiamo from "@/sectionPage/doveSiamo";
import MainContent from "@/sectionPage/mainContent";
import ServiceLido from "@/sectionPage/serviceLido";
import Tariffe from "@/sectionPage/tariffe";


export default function Home() {
  return (
    <div className="w-screen h-screen p-10 m-0">
      {/* here navbar */}
      <Navbar />
      {/* here main content :
      - photo to beach 
      - the service to lido
      - the rates
      - comments from the customers
      - where are we located
    */}
      <section id="main-content">
        <MainContent />
      </section>

      <section id="services">
        <ServiceLido />
      </section>

      <section id="rates">
        <Tariffe />
      </section>
      <section id="comments">
        <Comments />
      </section>
      <section id="location">
        <DoveSiamo />
      </section>

      {/* here footer */}
      <footer className="flex flex-row w-full mt-20 mb-3 justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1>ShellLido</h1>
          <p>Copyright 2025 ShellLido</p>
        </div>

        <div className="flex flex-row gap-10">
          <p>Nome Utente, 12345-Italia</p>
          <p>+39 234586937586</p>
          <p>Nomeutente@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
