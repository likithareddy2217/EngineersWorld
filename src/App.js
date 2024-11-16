import "./App.css"
import NavigationComponent from "./components/navigationbar/navigation";
import AboutComponent from "./components/AboutPage/About";
import HireComponent from "./components/HirePage/Hire"
import Home from "./components/HomePage/Home";
import Leadership from "./components/HirePage/Leadership";
import Particles from "./magicui/components/ui/particles";
import ContactForm from "./components/ContactPage/Contact";
import Testimonial from "./components/HirePage/Testimonial";
import Footer from "./components/footerPage/Footer";
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
      <Testimonial />
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;