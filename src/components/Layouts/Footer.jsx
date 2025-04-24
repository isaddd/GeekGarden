import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button"; //import component button
import AOS from "aos"; //library animasi
import "aos/dist/aos.css"; //library animasi

function Footer() {
  useEffect(() => {
    //fungsi useeffect untuk menjalankan hanya sekali
    AOS.init(); //mengaktifkan animasi scroll
  }, []);
  // array data social yang nanti dipanggil menggunakan map
  const social = [
    { src: "/images/icon/instagram.png", alt: "instagram" },
    { src: "/images/icon/dribbble.png", alt: "dribbble" },
    { src: "/images/icon/x.png", alt: "x" },
    { src: "/images/icon/youtube.png", alt: "youtube" },
  ];

  const companyLinks = ["About Us", "Blog", "Contact Us", "Pricing", "Testimonials"]; //array data company yang akan dipanggil dengan map
  const supportLinks = ["Help Center", "Term of Service", "Legal", "Privacy Policy", "Status"]; //array data support yang akan dipanggil dengan map

  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F7FA]">
      {/* data-aos digunakan untuk memilih jenis animasinya  */}
      <div className="max-w-screen-xl px-4 mx-auto text-center py-12" data-aos="zoom-in">
        <h1 className="max-w-xl mx-auto md:text-5xl text-3xl md:leading-[60px] mb-4">Pellentesque suscipit fringilla libero eu.</h1>
        <Button>
          <span className="flex items-center">
            Register Now
            <img src="/images/icon/Right.svg" className="ml-1 w-3" alt="" />
          </span>
        </Button>
      </div>

      <footer className="bg-[#263238] w-full text-[#F5F7FA]">
        <div className="max-w-screen-xl px-4 mx-auto py-12 md:flex">
          <div className="md:w-2/5">
            <img src="/images/footer.png" className="w-48" alt="Logo" />
            <p className="mt-5 md:mt-10">
              Copyright © 2023 Pixelgrade. <br /> All rights reserved.
            </p>
            <div className="flex gap-5 mt-5">
              {social.map(({ src, alt }) => (
                //menampilkan data social secara dinamis
                <img key={alt} src={src} className="w-8 cursor-pointer" alt={alt} />
              ))}
            </div>
          </div>
          <div className="md:w-3/5 mt-5 md:mt-0">
            <div className="flex flex-wrap justify-between">
              {[
                { title: "Company", links: companyLinks },
                { title: "Support", links: supportLinks },
              ].map(({ title, links }) => (
                //menampilkan data company dan support secara dinamis
                <div key={title} className="md:w-auto w-1/2">
                  <p className="text-2xl font-semibold mb-5">{title}</p>
                  <div className="flex flex-col gap-2">
                    {links.map((link) => (
                      <a key={link} href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="md:w-auto mt-5 md:mt-0">
                <p className="text-2xl font-semibold mb-5">Stay up to date</p>
                <div className="flex items-center bg-[#ffffff30] p-3 rounded-lg">
                  <input type="email" placeholder="Your email address" className="w-64 bg-transparent text-white placeholder-white-50 focus:outline-none" />
                  <a href="#">
                    <img src="/images/icon/send.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
