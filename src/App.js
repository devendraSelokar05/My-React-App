import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Learn from "./components/Learn";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, } from "react-router-dom";



function App() {
  return (
<>
 <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Learn" element={<Learn />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    

    </>
 
   


  
  );
}

export default App;
