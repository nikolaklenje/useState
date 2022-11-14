import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import Response from "./components/Response";
// import { useState } from "react";




function App() {

  // const [response, setRespone] = useState({});
  return (
<div>
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Response" element={<Response />} />
    </Routes>
  </Router>
</div>
  )
   
}

export default App;
