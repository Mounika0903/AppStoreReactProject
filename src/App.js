
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Components/Menu";
import { lazy, Suspense } from "react";
import Footer from "./Components/Footer";
// import Contacts from "./Components/Contacts";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from './Context/AuthContext';
import { useContext } from 'react';

// Lazy-loaded components
const Home = lazy(() => import("./Components/Home"));
const AddApp = lazy(() => import("./Components/AddApp"));
const AppList = lazy(() => import("./Components/AppList"));
const Update= lazy(() => import("./Components/Update"));
const About = lazy(() => import("./Components/About"));
const Login = lazy(() => import("./Components/Login"));  
const Register = lazy(() => import("./Components/Register"));  

// Placeholder for ProtectedRoute component
const ProtectedRoute = ({ role, children }) => {
  const { user } = useContext(AuthContext);
  if (!user || user.role !== role) {
    return <Navigate to="/" />;
  }
  return children;
};

// Placeholder for ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <AuthProvider>
      <>
        <Menu />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading.....</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/add-application" element={
                <ProtectedRoute role="admin">
                  <AddApp />
                </ProtectedRoute>
              } />
              {/* <Route path="/Contacts" element={<Contacts />} /> */}
              <Route path="/applicationlist" element={<AppList />} />
              <Route path="/update/:id" element={<Update/>} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/register" element={<Register />} /> 
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
