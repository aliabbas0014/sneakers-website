import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <Router basename="/sneakers-website">
      <div className="min-h-screen flex flex-col">
        {/* Header is shared across all pages */}
        <Header />

        {/* Dynamic content based on the current route */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        {/* Footer is shared across all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
