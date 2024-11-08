// import { useEffect } from 'react';
import "./App.css"
import NavigationComponent from "./components/navigationbar/navigation";

import AboutComponent from "./components/AboutPage/About";

function App() {
  
  return (
    <div className="EngineersWorld">
     <NavigationComponent />
      {/* <p>hello </p> */}

      <AboutComponent />
    </div>
  );
}

export default App;
