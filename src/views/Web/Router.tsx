import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Landing from "src/views/Web/Landing";
import Login from "src/views/Web/Login";
import SignUp from "src/views/Web/Signup";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function Router() {
  const userData = useSelector((state: any) => state.user);
  const navigate = useNavigate()
  useEffect(() => {
    if (userData.token) {
      navigate("/discover");
    }
  }, [userData]);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
