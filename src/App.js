// import { useEffect } from 'react';
import "./App.css"
import NavigationComponent from "./components/navigationbar/navigation";

import AboutComponent from "./components/AboutPage/About";
import Home from "./components/HomePage/Home";

function App() {
  
  return (
    <div className="EngineersWorld">
     <NavigationComponent />
     <Home />
      {/* <p>hello </p> */}

      <AboutComponent />
    </div>
  );
}

export default App;
