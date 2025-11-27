import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const theme = 'forest'; // Fixed to forest theme

  // Render the current view
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home theme={theme} setCurrentView={setCurrentView} />;
      case 'projects':
        return <Projects theme={theme} />;
      case 'resume':
        return <Resume theme={theme} />;
      case 'contact':
        return <Contact theme={theme} />;
      default:
        return <Home theme={theme} setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'forest' ? 'theme-forest' : 'theme-bright'}`}>
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        theme={theme}
      />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
