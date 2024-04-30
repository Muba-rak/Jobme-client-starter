import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Job, Contact, JobDetails, Login } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Job />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
