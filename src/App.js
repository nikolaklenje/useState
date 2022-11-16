import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import Response from "./components/Response";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather"






function App() {


 
  return (
<div>
  <Header />
  <Weather />
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Response" element={<Response />} />
    </Routes>
  </Router>
  <Footer />
</div>
  )
   
}

export default App;
