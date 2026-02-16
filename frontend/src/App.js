import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { HistoryPage } from "./pages/HistoryPage";
import { HighwaysPage } from "./pages/HighwaysPage";
import { RegionalPage } from "./pages/RegionalPage";
import { LocalPage } from "./pages/LocalPage";
import { RulesPage } from "./pages/RulesPage";
import { MapPage } from "./pages/MapPage";
import { AttractionsPage } from "./pages/AttractionsPage";
import { SafetyPage } from "./pages/SafetyPage";
import { StatisticsPage } from "./pages/StatisticsPage";
import { WinterPage } from "./pages/WinterPage";
import { CyclingPage } from "./pages/CyclingPage";
import { HistoricPage } from "./pages/HistoricPage";
import { BridgesPage } from "./pages/BridgesPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/highways" element={<HighwaysPage />} />
            <Route path="/regional" element={<RegionalPage />} />
            <Route path="/local" element={<LocalPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/winter" element={<WinterPage />} />
            <Route path="/cycling" element={<CyclingPage />} />
            <Route path="/historic" element={<HistoricPage />} />
            <Route path="/bridges" element={<BridgesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
