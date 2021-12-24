import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar></Navbar>}>
          <Route path='/' element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
