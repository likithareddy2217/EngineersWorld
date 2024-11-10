import "./App.css"
import NavigationComponent from "./components/navigationbar/navigation";
import AboutComponent from "./components/AboutPage/About";
import HireComponent from "./components/HirePage/Hire"
import Home from "./components/HomePage/Home";

function App() {
  
  return (
    <div className="EngineersWorld">
     <NavigationComponent />
     <Home />
      {/* <p>hello </p> */}
      <AboutComponent />
      <HireComponent />
    </div>
  );
}

export default App;