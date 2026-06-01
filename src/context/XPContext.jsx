import { createContext, useContext, useState, useEffect } from 'react';

const XPContext = createContext(null);

export function XPProvider({ children }) {
  const [xp, setXp] = useState(() => Number(localStorage.getItem('xp') || 0));
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks') || '{}'));

  function addXP(amount) {
    setXp(prev => {
      const next = prev + amount;
      localStorage.setItem('xp', next);
      return next;
    });
  }

  function toggleTask(key) {
    setTasks(prev => {
      const updated = { ...prev };
      if (updated[key]) {
        delete updated[key];
      } else {
        updated[key] = true;
        addXP(10);
      }
      localStorage.setItem('tasks', JSON.stringify(updated));
      return updated;
    });
  }

  function resetAll() {
    setXp(0);
    setTasks({});
    localStorage.setItem('xp', 0);
    localStorage.setItem('tasks', '{}');
  }

  const level = Math.floor(xp / 100);
  const completedCount = Object.values(tasks).filter(Boolean).length;

  return (
    <XPContext.Provider value={{ xp, tasks, addXP, toggleTask, resetAll, level, completedCount }}>
      {children}
    </XPContext.Provider>
  );
}

export function useXP() {
  return useContext(XPContext);
}
