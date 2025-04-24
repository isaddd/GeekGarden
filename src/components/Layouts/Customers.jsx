import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Customer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#F5F7FA]">
      <div className="max-w-screen-xl md:px-0 px-4 mx-auto py-10">
        <div className="md:flex items-center overflow-x-hidden">
          <div className="md:w-2/5 flex items-center md:justofy-start justify-center rounded-md" data-aos="fade-right">
            <img src="/images/tesla.png" alt="Logo" className="h-auto w-[90%]" />
          </div>
          <div className="md:w-3/5 md:text-left text-center" data-aos="fade-left">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu,
              at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <h2 className="text-xl text-[#4CAF4F] mt-4">Tim Smith</h2>
            <p>British Dragon Boat Racing Association</p>
            <div className="flex flex-wrap items-center justify-center md:justify-between mt-8">
              <div className="w-1/3 md:w-auto flex md:justify-start justify-center">
                <img src="images/clients/client-1.png" alt="Logo 1" className="w-12" />
              </div>
              <div className="w-1/3 md:w-auto flex md:justify-start justify-center">
                <img src="images/clients/client-2.png" alt="Logo 2" className="w-12" />
              </div>
              <div className="w-1/3 md:w-auto flex md:justify-start justify-center">
                <img src="images/clients/client-3.png" alt="Logo 3" className="w-12" />
              </div>
              <div className="w-1/3 md:w-auto flex md:justify-start justify-center">
                <img src="images/clients/client-4.png" alt="Logo 4" className="w-12" />
              </div>
              <div className="w-1/3 md:w-auto flex md:justify-start justify-center">
                <img src="images/clients/client-5.png" alt="Logo 3" className="w-12" />
              </div>
              <div className="w-1/3 md:w-auto flex md:justify-start justify-center">
                <img src="images/clients/client-6.png" alt="Logo 4" className="w-12" />
              </div>
              <div className="w-1/3 md:w-auto flex md:justify-start justify-center">
                <Button variant="gosht" className="text-[#4CAF4F]">
                  Meet all customers →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
