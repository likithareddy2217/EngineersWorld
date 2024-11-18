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
     {/* <NavigationComponent /> */}
     <div id="homepage">
     <Home />
     </div>
     <div id="aboutpage">
      <AboutComponent />
      </div>
     <div id="hirepage">
      <HireComponent />
      </div>
     <div id="leaderpage">
      <Leadership />
      </div>
      <Particles
                    className="fixed inset-0 particles"
                    quantity={500}
                    ease={80}
                    color={"#FFFFFF"}
                    refresh
                />
     <div id="testimonialpage">
      <Testimonial />
      </div>
     <div id="contactpage">
      <ContactForm/>
      </div>
     <div id="footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;