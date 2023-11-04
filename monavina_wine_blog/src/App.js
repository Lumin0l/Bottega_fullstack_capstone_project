import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CategoriesDropdown from './components/Navbar/CategoriesDropdown';
import Quizzes from './components/Quizzes/Quizzes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={CategoriesDropdown} />
          <Route path="/quizzes" component={Quizzes} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


