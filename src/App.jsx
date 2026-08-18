import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function MainPage() {
  return (
    <div className="min-h-screen bg-[#f6f1e8]">
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<MainPage />} />

        {/* Privacy Policy */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* Terms & Conditions */}
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;