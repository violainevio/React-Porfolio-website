import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/footer/Footer";
import AppScreen from "./screens/AppScreen";
import WebsiteScreen from "./screens/WebsiteScreen";
import AppDetailScreen from "./screens/AppDetailScreen";
import WebsiteDetailScreen from "./screens/WebsiteDetailScreen";

function App() {
  // https://www.youtube.com/watch?v=s4JVGlPC5u0

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/app" element={<AppScreen />} />
            <Route path="/website" element={<WebsiteScreen />} />
            <Route path="/apps/:id" element={<AppDetailScreen />} />
            <Route path="/websites/:id" element={<WebsiteDetailScreen />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
