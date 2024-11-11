import "./App.css"
import NavigationComponent from "./components/navigationbar/navigation";
import AboutComponent from "./components/AboutPage/About";
import HireComponent from "./components/HirePage/Hire"
import Home from "./components/HomePage/Home";
import Leadership from "./components/HirePage/Leadership";
function App() {
  
  return (
    <div className="EngineersWorld">
     <NavigationComponent />
     <Home />
      {/* <p>hello </p> */}
      <AboutComponent />
      <HireComponent />
      <Leadership />
    </div>
  );
}

export default App;