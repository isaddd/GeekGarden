import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Calender() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="md:flex items-center max-w-screen-xl md:px-0 px-4 mx-auto py-16 overflow-x-hidden">
      <div className="md:w-1/2" data-aos="fade-right">
        <img src="/images/calender.png" alt="Illustration" className="w-full" />
      </div>
      <div className="md:w-1/2 md:text-left text-center" data-aos="fade-left">
        <h2 className="md:text-4xl text-3xl font-bold mb-4 md:mt-0 mt-4">How to design your site footer like we did</h2>
        <p className="md:mb-6 mb-4">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.
          Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi
          ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}

export default Calender;
