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
  JobApplication,
  AppliedJobs,
} from "./pages";
import { Suspense } from "react";
import FallBackLoader from "./components/FallBackLoader";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/jobs"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <Job />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/job/:jobId"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <JobDetails />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/application/:jobId"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <JobApplication />
              </Suspense>
            }
          />
          <Route
            path="/appliedjobs"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <AppliedJobs />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <Error404 />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
