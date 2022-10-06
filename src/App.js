import './App.css';

import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AppBar from './components/Header/AppBar';
import MainLayout from './components/MainLayout';
import FooterBar from './components/Footer/FooterBar';
import AboutPage from './components/pages/AboutPage';
import ProjectPage from './components/pages/ProjectPage';

function App() {
  return (
    <div className="container">
      <AppBar />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage title={'Home'}/>} />
          <Route path="/about" element={<AboutPage title={'about'} />} />
          <Route path="/projects" element={<ProjectPage title={'projects'} />} />
        </Routes>
      </MainLayout>
      
      <FooterBar />
    </div>
  );
}

export default App;
