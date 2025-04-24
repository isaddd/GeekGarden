import React, { useEffect } from "react";
import Title from "@/components/ui/Title"; //import component title
import AOS from "aos"; //library animasi
import "aos/dist/aos.css"; //library animasi

//array data client yang akan dipanggil dengan map
const clients = [
  { id: 1, logo: "/images/clients/client-1.png" },
  { id: 2, logo: "/images/clients/client-2.png" },
  { id: 3, logo: "/images/clients/client-3.png" },
  { id: 4, logo: "/images/clients/client-4.png" },
  { id: 5, logo: "/images/clients/client-5.png" },
  { id: 6, logo: "/images/clients/client-6.png" },
  { id: 7, logo: "/images/clients/client-7.png" },
];

const OurClients = () => {
  useEffect(() => {
    //fungsi useeffect untuk menjalankan hanya sekali
    AOS.init(); //mengaktifkan animasi scroll
  }, []);
  return (
    <div className="max-w-screen-xl md:px-0 px-4 mx-auto py-20 text-center">
      {/* data-aos digunakan untuk memilih jenis animasinya  */}
      <div data-aos="fade-up">
        <Title title="Our Clients" desc="We have been working with some Fortune 500+ clients" />
      </div>
      <div className="flex md:justify-between justify-center flex-wrap mx-auto" data-aos="fade-up">
        {clients.map((client) => (
          //menampilkan data client secara dinamis
          <div key={client.id} className="m-4">
            <img src={client.logo} alt={`Client ${client.id}`} className="w-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
