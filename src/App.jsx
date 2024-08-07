import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/index'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Analytics from './pages/analytics/index';
import './App.css';

function App() {

  return (
    <div className="bg-slate-900">
      <Sidebar />
      <main className="flex">
        <Navbar />
        <div className="w-screen ml-[60px] mt-[60px] min-h-svh bg-slate-900 text-white">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/page1" element={< Analytics />} />
            <Route path="/page2" element={<Analytics />} />
            <Route path="/page3" element={<Analytics />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
