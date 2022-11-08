import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Collection from './pages/Collection';
import Shop from './pages/Shop';
import Support from './pages/Support';
import Book from './pages/Book';
import NoPage from './pages/NoPage';
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="collection" element={<Collection />} />
          <Route path="shop" element={<Shop />} />
          <Route path="support" element={<Support />} />
          <Route path="book" element={<Book />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
