import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <NavBar />
    <section className="content">
      <Routes>
        <Route path="/bookstore" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section>
  </Router>
);

export default App;
