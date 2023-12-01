import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageSlider from "./pages/ImageSlider";
// import "./index.css";


function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
        
          <Route path="/about" element={<About />} />
          <Route path="/images" element={<ImageSlider />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
