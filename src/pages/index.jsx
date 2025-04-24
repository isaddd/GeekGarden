import React from "react";
import Navbar from "/src/components/Layouts/Navigation";
import Sliders from "/src/components/Layouts/Slider";
import OurClients from "/src/components/Layouts/OurClient";
import CommunityManagement from "/src/components/Layouts/CommunityManagement";
import Unlock from "/src/components/Layouts/Unlock";
import Achievement from "/src/components/Layouts/Achievement";
import Calendar from "/src/components/Layouts/Calendar";
import Customer from "/src/components/Layouts/Customers";
import CommunityUpdates from "/src/components/Layouts/CommunityUpdates";
import Footer from "/src/components/Layouts/Footer";
import "@/index.css";

function Index() {
  return (
    <>
      <div className="container-fluid mx-auto">
        <Navbar />
        <Sliders />
        <OurClients />
        <CommunityManagement />
        <Unlock />
        <Achievement />
        <Calendar />
        <Customer />
        <CommunityUpdates />
        <Footer />
      </div>
    </>
  );
}

export default Index;
