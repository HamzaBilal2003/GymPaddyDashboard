import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

// Importing all pages
import Dashboard from "./pages/dashboard/Dashboard";
import Setting from "./pages/setting/Setting";
import Support from "./pages/support/Support";

import Transaction from "./pages/transaction/Transaction";
import Subcription from "./pages/subcription/Subcription";
import Verification from "./pages/verification/Verification";
import Ads from "./pages/ads/Ads";
import Social from "./pages/social/Social";
import Connect from "./pages/connect/Connect";
import Market from "./pages/market/Market";
import Gym from "./pages/gym/Gym";
import Analytics from "./pages/analytics/Analytics";



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Layout Wraps All Routes */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="subcription" element={<Subcription />} />
          <Route path="verification" element={<Verification />} />
          <Route path="ads" element={<Ads />} />
          <Route path="social" element={<Social />} />
          <Route path="connect" element={<Connect />} />
          <Route path="market" element={<Market />} />
          <Route path="gym" element={<Gym />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="support" element={<Support />} />
          <Route path="settings" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
