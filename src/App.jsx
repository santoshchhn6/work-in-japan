import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Layout from "./Layout";
import Jobs from "./Pages/Jobs";
import JobDetailPage from "./Pages/JobDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job_detail" element={<JobDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
