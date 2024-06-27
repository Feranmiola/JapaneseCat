import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Roadmap from './Components/Roadmap';
import Socials from './Components/Socials';
import Tokenomics from './Components/Tokenomics';
import './globals.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="flex w-full h-[98px] bg-[#F8F8F8] items-center justify-center fixed top-0 z-50">
        <div className="flex flex-row px-20 w-full items-center justify-between">
          <img src="./assets/catSmall.svg" alt="Logo" />
          <nav className="flex flex-row items-center ml-20 justify-center space-x-14">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>TOKENOMICS</p>
            <p>ROADMAP</p>
          </nav>
          <div className="bg-headerText">
            <div className="px-5 py-2 tracking-widest text-white text-[14px]">
              COMMUNITY
            </div>
          </div>
        </div>
      </header>

      <main className="fullBG ab flex flex-col w-full">
        <section className="relative w-full min-h-screen">
          <Home />
        </section>
        <section className="relative w-full min-h-screen">
          <About />
        </section>
        <section className="relative w-full min-h-screen">
          <Tokenomics />
        </section>
        <section className="relative w-full min-h-screen">
          <Socials />
        </section>
        <section className="relative w-full min-h-screen">
          <Roadmap />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
