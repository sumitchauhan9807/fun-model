import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Discover from "src/views/App/Discover";
import Login from "src/views/Web/Login";
import SignUp from "src/views/Web/Signup";
import Chats from "src/views/Web/Chats";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function Router() {
  const userData = useSelector((state:any) => state.user);
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!userData.token) {
  //     navigate("/login");
  //   }
  // }, [userData]);
  return (
    <Routes>
      <Route  path="/discover" element={<Discover />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
}

export default Router;
