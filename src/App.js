import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/homepage/Home';
import About from './components/pages/about/About';
import AfterHeader from './components/AfterHeader';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Home />
          </>
          } />
        <Route path='/about' element={
          <>
            <AfterHeader title="About Us" strong="Bright food. Warmer hearts." para="Welcome to Little Lemon, a family-run Mediterranean kitchen where old-world recipes meet fresh, modern touches. We're passionate about simple ingredients cooked with care, and about creating a place where friends, families, and new neighbours feel instantly at home." />
            <About />
          </>
        } />
        <Route path='/menu' element={
          <>
            <AfterHeader title="Menu" strong="Bright, seasonal Mediterranean plates,simple ingredients, bold flavors." para="Our menu changes with the seasons and focuses on fresh produce, honest technique, and shareable moments. Below is a sample menu to capture the Little Lemon spirit for your website." />
          </>
        } />
        <Route path='/reservation' element={
          <>
            <AfterHeader title="Resrvation" strong="Save your table. Share the moment." para=" We'd love to welcome you, whether it's a weekday lunch, a dinner with friends, or a small celebration. Below you'll find quick ways to book, what we need from you, and our reservation policies." />
          </>
        } />
      </Routes>
      {/* <Contact /> */}
      <Footer />
    </Router>
  );
}

export default App;
