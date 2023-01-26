import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import NoPage from "./pages/NoPage/NoPage";
import { useEffect, useState } from "react";


export default function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Home user={user} setUser={setUser} />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profileUpdate" element={<UpdateProfile user={user} setUser={setUser} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}