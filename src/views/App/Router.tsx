import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dashboard from "src/views/App/Dashboard";
import Produce from "src/views/App/Produce";

import Login from "src/views/Web/Login";
import SignUp from "src/views/Web/Signup";
import Chats from "src/views/Web/Chats";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Sidebar from "src/views/App/components/Sidebar"
import NavBar from "src/views/App/components/NavBar"

function Router() {
  const userData = useSelector((state:any) => state.user);
  const navigate = useNavigate()
  useEffect(() => {
    if (!userData.token) {
      navigate("/login");
    }
  }, [userData]);
  if(!userData.token) return null
  return (
    <div>
    <Sidebar/>
    <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
      <NavBar/>
      <Routes>
        <Route  path="/dashboard" element={<Dashboard />} />
        <Route  path="/produce" element={<Produce />} />

        {/* <Route path="/chats" element={<Chats />} /> */}
    </Routes>
    </main>
  </div>
  )
  
}

export default Router;
