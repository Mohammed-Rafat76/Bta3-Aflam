import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import StartFreeTrial from "./Components/StartFreeTrial";

export default function MainLayout() {
  return (
    <div className="bg-[#0F0F0F]">
      <Header />
      <Outlet />
      <StartFreeTrial/>
      <Footer />
    </div>
  );
}