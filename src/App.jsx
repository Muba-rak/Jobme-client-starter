import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Job,
  Contact,
  JobDetails,
  Login,
  Register,
  Error404,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
