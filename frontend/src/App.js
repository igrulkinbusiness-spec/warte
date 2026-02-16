import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { VignettesPage } from "./pages/VignettesPage";
import { RoutesPage } from "./pages/RoutesPage";
import { ParkingPage } from "./pages/ParkingPage";
import { RulesPage } from "./pages/RulesPage";
import { MapPage } from "./pages/MapPage";
import { TollsPage } from "./pages/TollsPage";
import { BordersPage } from "./pages/BordersPage";
import { FuelPage } from "./pages/FuelPage";
import { WeightsPage } from "./pages/WeightsPage";
import { RestPage } from "./pages/RestPage";
import { ServicesPage } from "./pages/ServicesPage";
import { WeatherPage } from "./pages/WeatherPage";
import { ContactsPage } from "./pages/ContactsPage";
import { AboutPage } from "./pages/AboutPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vignettes" element={<VignettesPage />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/parking" element={<ParkingPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/tolls" element={<TollsPage />} />
            <Route path="/borders" element={<BordersPage />} />
            <Route path="/fuel" element={<FuelPage />} />
            <Route path="/weights" element={<WeightsPage />} />
            <Route path="/rest" element={<RestPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
