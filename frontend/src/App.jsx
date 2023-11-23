import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage, Header, Footer } from './components';
import './App.css'

function App() {

  return (
    <div>
      {/* <Header />
      <LandingPage />
      <Footer /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
