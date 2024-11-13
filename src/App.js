import "./App.css"
import NavigationComponent from "./components/navigationbar/navigation";
import AboutComponent from "./components/AboutPage/About";
import HireComponent from "./components/HirePage/Hire"
import Home from "./components/HomePage/Home";
import Leadership from "./components/HirePage/Leadership";
import Particles from "./magicui/components/ui/particles";
function App() {
  
  return (
    <div className="EngineersWorld">
     <NavigationComponent />
     <Home />
      {/* <p>hello </p> */}
      <AboutComponent />
      <HireComponent />
      <Leadership />
      <Particles
                    className="fixed inset-0 particles"
                    quantity={500}
                    ease={80}
                    color={"#FFFFFF"}
                    refresh
                />
    </div>
  );
}

export default App;