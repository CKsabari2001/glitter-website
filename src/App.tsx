// Custom Style
import "./assets/css/main.css";

// React Component
import Home from "./components/pages/Home";
import Destinations from "./components/pages/Destinations";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import NotFound from "./components/pages/NotFound";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// MUI Theme
import global from "./components/theme/global";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={global}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
