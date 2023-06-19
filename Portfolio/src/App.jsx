import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="dark:bg-dark bg-white w-full h-screen">
      <div>
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
