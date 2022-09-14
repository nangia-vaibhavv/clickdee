// import Form from "./component/form";
// import Header from "./component/header";
// import BelowHeader from "./component/belowHeader";
// import Testimonial from "./component/testimonials";
// import Footer from "./component/footer";
// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <BelowHeader/>
//       <Form />
//       <Testimonial/>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import FormPage from './component/FormPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} /> 

        <Route path="/form" element={<FormPage />} /> 


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;