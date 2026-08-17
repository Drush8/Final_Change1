import { Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Programs from "./components/pages/programs";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import CoFacilitatorsPage from "./components/pages/MeetDrNagesh";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/co-facilitators" element={<CoFacilitatorsPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
