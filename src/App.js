import "./App.css"
import NavigationComponent from "./components/navigationbar/navigation";

import AboutComponent from "./components/AboutPage/About";
import HireComponent from "./components/HirePage/Hire"
function App() {
  
  return (
    <div className="EngineersWorld">
     <NavigationComponent />
      {/* <p>hello </p> */}

      <AboutComponent />
      <HireComponent />
    </div>
  );
}

export default App;