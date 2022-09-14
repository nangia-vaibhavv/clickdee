import Header from "./header";
import Testimonial from "./testimonials";
import Footer from "./footer";
import Form from "./form";
function FormPage() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Testimonial/>
      <Footer />
    </div>
  );
}

export default FormPage;