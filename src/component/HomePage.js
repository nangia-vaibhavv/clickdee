import Header from "./header";
import BelowHeader from "./belowHeader";
import Testimonial from "./testimonials";
import Footer from "./footer";
function HomePage() {
  return (
    <div className="App">
      <Header/>
      <BelowHeader/>
      <Testimonial/>
      <Footer />
    </div>
  );
}

export default HomePage;