import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import KeyMetrics from './components/KeyMetrics';
import AbstractBackground from './components/AbstractBackground';
import ExperimentalFlow from './components/ExperimentalFlow';
import ProductShowcase from './components/ProductShowcase';
import ResultsCharts from './components/ResultsCharts';
import Microstructure from './components/Microstructure';
import Discussion from './components/Discussion';
import AboutAuthor from './components/AboutAuthor';
import MechanismHighlight from './components/MechanismHighlight';
import Footer from './components/Footer';
import LoadingProgress from './components/LoadingProgress';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-science-100 selection:text-science-900">
      <LoadingProgress />
      <Navigation />
      <main>
        <Hero />
        <KeyMetrics />
        <AbstractBackground />
        <ExperimentalFlow />
        <ProductShowcase />
        {/* Reordered: Characterization (Figs 1-3) first, then Performance (Figs 4-5) */}
        <Microstructure />
        <ResultsCharts />
        <MechanismHighlight />
        <Discussion />
        <AboutAuthor />
      </main>
      <Footer />
    </div>
  );
}

export default App;