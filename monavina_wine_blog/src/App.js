import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CategoriesDropdown from './components/Navbar/CategoriesDropdown';
import Quizzes from './components/Quizzes/Quizzes';
import SearchBar from './components/Navbar/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={CategoriesDropdown} />
          <Route path="/quizzes" component={Quizzes} />
        </Routes>
        <SearchBar />
      </div>
    </Router>
  );
}

function Landing() {
  return (
    <div>
      <h2>Landing Page</h2>
      <p>Content for your landing page goes here.</p>
    </div>
  );
}

export default App;


