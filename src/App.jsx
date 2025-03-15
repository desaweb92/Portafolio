import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import StepsSection from "./components/StepsSection";
import Projects from "./pages/Projects";
import Error404 from "./components/Error_404";
const App = () => {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stepssection" element={<StepsSection />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<Error404 />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
