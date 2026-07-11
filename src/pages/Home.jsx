import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Fleet from "../components/home/Fleet";
//import Hero from "../components/home/Hero";


import WhyChooseUs from "../components/home/WhyChooseUs";
//import PopularRoutes from "../components/home/PopularRoutes";
import PopularRoutes from "../components/home/PopularRoutes";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
function Home() {
  return (
    <>
  <Hero />
  <Services />
  <Fleet />
  <WhyChooseUs />
   <PopularRoutes />
   <Gallery />
   <Testimonials />
   <Contact />
   </>
  );
}

export default Home;