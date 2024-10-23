import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full relative">
        <div className="w-full fixed top-0 z-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog">
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
