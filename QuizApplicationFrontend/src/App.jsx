import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Quiz from "./Pages/Quiz";


function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/quiz" element={<Quiz />} />

         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
  
  );
}

export default App;

