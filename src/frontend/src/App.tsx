import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { csMajor } from './data/majors';
import { Dashboard } from './components/Dashboard';
import { Sidebar } from './components/Sidebar';
import { LandingPage } from './components/LandingPage';
import { Requirement } from './types';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0f',
      paper: '#1a1a2e',
    },
    primary: {
      main: '#818cf8',
    },
  },
});

function App() {
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const progress = useMemo(() => {
    const totalCourses = csMajor.requirements.reduce((acc, req) => acc + req.courses.length, 0);
    const completedCount = completedCourses.length;
    return totalCourses > 0 ? (completedCount / totalCourses) * 100 : 0;
  }, [completedCourses]);

  const handleCourseToggle = (courseId: string) => {
    setCompletedCourses(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleReset = () => {
    setCompletedCourses([]);
  };

  const handleSelectMajor = (major: string) => {
    setSelectedMajor(major);
  };

  if (!selectedMajor) {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <LandingPage onSelectMajor={handleSelectMajor} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <Sidebar
          progress={progress}
          completedCount={completedCourses.length}
          totalCount={csMajor.requirements.reduce((acc, req) => acc + req.courses.length, 0)}
          onReset={handleReset}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <main className="main-content">
          <Dashboard
            requirements={csMajor.requirements}
            completedCourses={completedCourses}
            onCourseToggle={handleCourseToggle}
            selectedCategory={selectedCategory}
          />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;