import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/index'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Analytics from './pages/analytics/index';

function App() {

  return (
    <div className="">
      <Sidebar />
      <main className="flex min-h-svh">
        <Navbar />
        <div className="flex-1 ml-[60px] mt-[60px] min-h-svh bg-slate-900 text-white">
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
