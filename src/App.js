import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            <About />
          </>
          } />
        <Route path='/about' element={< About/>} />
      </Routes>
      {/* <Contact /> */}
    </Router>
  );
}

export default App;
