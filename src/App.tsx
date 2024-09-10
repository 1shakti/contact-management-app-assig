import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import AddEditContact from "./containers/contact/AddEditContact";
import ChartMapDashBoard from "./pages/ChartMapDashBoard";

const AppContent = () => {
  const location = useLocation();
  const getHeaderTitle = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "Contact Page";
      case "/chart-map":
        return "Chart & Map Dashboard";
      default:
        return "Contact Page";
    }
  };

  return (
    <>
      <Header title={getHeaderTitle(location.pathname)} />
      <div className="flex">
        <Sidebar />
        <main className="w-full p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-edit/:id?" element={<AddEditContact />} />
            <Route path="/chart-map" element={<ChartMapDashBoard />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

// Main App component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
