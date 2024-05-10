import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
    <div className="w-full relative">
      <div className="w-full fixed top-0">
        <Navbar /> 
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App;

