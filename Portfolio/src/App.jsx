import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="dark:bg-dark w-full h-screen">
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
