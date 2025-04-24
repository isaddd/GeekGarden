import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Unlock() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="md:flex items-center max-w-screen-xl md:px-0 px-4 mx-auto py-16 overflow-x-hidden">
      <div className="md:w-1/2" data-aos="fade-right">
        <img src="/images/unlock.png" alt="Illustration" className="w-full" />
      </div>
      <div className="md:w-1/2 md:text-left text-center" data-aos="fade-left">
        <h2 className="md:text-4xl text-3xl font-bold mb-4 md:mt-0 mt-4">The unseen of spending three years at Pixelgrade</h2>
        <p className="md:mb-6 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique euismod.</p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}

export default Unlock;
