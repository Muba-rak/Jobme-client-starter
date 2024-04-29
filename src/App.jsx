import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Job, Contact, JobDetails } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Job />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
