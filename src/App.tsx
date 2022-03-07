import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import StartPage from './pages/Startpage';

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
