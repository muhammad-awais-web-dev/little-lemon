import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/homepage/Home';
function About(){
  return <h1>About Me</h1>
}

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
        <Route path='/about' element={< About/>} />
      </Routes>
      {/* <Contact /> */}
      <Footer />
    </Router>
  );
}

export default App;
