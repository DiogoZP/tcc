import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/components/home";
import Login from "@/components/login";
import NotFound from "@/components/notfound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/404" element={<NotFound/>} />
        <Route path="*" element={<Navigate to='404'/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;