import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/homepage/Home';
import About from './components/pages/about/About';
import AfterHeader from './components/AfterHeader';
import BeforeFooter from './components/BeforeFooter';
import Menu from './components/pages/menu/Menu';
import Reservation from './components/pages/reservation/Reservation';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <main>
            <Home />
          </main>
          } />
        <Route path='/about' element={
          <main>
            <AfterHeader title="About Us" strong="Bright food. Warmer hearts." para="Welcome to Little Lemon, a family-run Mediterranean kitchen where old-world recipes meet fresh, modern touches. We're passionate about simple ingredients cooked with care, and about creating a place where friends, families, and new neighbours feel instantly at home." />
            <About />
            <BeforeFooter heading="Our Promise" para1="Every plate we send out combines respect for tradition with a bright, modern sensibility, honest flavours, careful technique, and a little spark of creativity." subHeading="Come by and taste the story." para2="(Prefer to plan ahead? Reserve a table or reach out for catering, we'd love to welcome you.)" />
          </main>
        } />
        <Route path='/menu' element={
          <main>
            <AfterHeader title="Menu" strong="Bright, seasonal Mediterranean plates,simple ingredients, bold flavors." para="Our menu changes with the seasons and focuses on fresh produce, honest technique, and shareable moments. Below is a sample menu to capture the Little Lemon spirit for your website." />
            <Menu />
            <BeforeFooter heading="Dietary & Allergy Notes" para1="We're happy to accommodate dietary needs. Many dishes can be made vegetarian, vegan, or gluten-free, ask your server. Please inform us of allergies before ordering." subHeading="Seasonal & Catering" para2="Our menu rotates with seasonal produce, check back for weekly specials and chef tasting nights. Hosting an event? Ask about our catering menu and private dining options." />
          </main>
        } />
        <Route path='/reservation' element={
          <main>
            <AfterHeader title="Resrvation" strong="Save your table. Share the moment." para=" We'd love to welcome you, whether it's a weekday lunch, a dinner with friends, or a small celebration. Below you'll find quick ways to book, what we need from you, and our reservation policies." />
            <Reservation />
            <BeforeFooter heading="Dietary & Allergy Notes" para1="We're happy to accommodate dietary needs. Many dishes can be made vegetarian, vegan, or gluten-free, ask your server. Please inform us of allergies before ordering." subHeading="Seasonal & Catering" para2="Our menu rotates with seasonal produce, check back for weekly specials and chef tasting nights. Hosting an event? Ask about our catering menu and private dining options." />
          </main>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
