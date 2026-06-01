import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { XPProvider } from './context/XPContext';
import LoadingScreen from './components/LoadingScreen';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Particles from './components/Particles';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Subjects from './pages/Subjects';
import Tests from './pages/Tests';
import Progress from './pages/Progress';
import Settings from './pages/Settings';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <XPProvider>
      <BrowserRouter>
        {!loaded && <LoadingScreen onDone={handleDone} />}
        {loaded && (
          <>
            <Particles />
            <div className="app-layout">
              <Sidebar />
              <Routes>
                <Route path="/"          element={<Home />} />
                <Route path="/tasks"     element={<Tasks />} />
                <Route path="/subjects"  element={<Subjects />} />
                <Route path="/tests"     element={<Tests />} />
                <Route path="/progress"  element={<Progress />} />
                <Route path="/settings"  element={<Settings />} />
              </Routes>
            </div>
            <BottomNav />
          </>
        )}
      </BrowserRouter>
    </XPProvider>
  );
}
