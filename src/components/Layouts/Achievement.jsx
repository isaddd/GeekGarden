import React, { useEffect } from "react";
import AOS from "aos"; //library animasi
import "aos/dist/aos.css"; //library animasi

// array data achievment yang akan dipanggil dengan map
const achievements = [
  { img: "/images/icon/achievement-1.png", count: "2,245,341", label: "Members" },
  { img: "/images/icon/achievement-2.png", count: "46,328", label: "Clubs" },
  { img: "/images/icon/achievement-3.png", count: "828,867", label: "Event Bookings" },
  { img: "/images/icon/achievement-4.png", count: "1,926,436", label: "Payments" },
];

function Achievement() {
  useEffect(() => {
    //fungsi useeffect untuk menjalankan hanya sekali
    AOS.init(); //mengaktifkan animasi scroll
  }, []);
  return (
    <div className="bg-[#F5F7FA]">
      <div className="md:flex items-center max-w-screen-xl md:px-0 px-4 mx-auto py-20">
        <div className="md:w-1/2 md:text-left text-center" data-aos="fade-right">
          {/* data-aos digunakan untuk memilih jenis animasinya  */}
          <h2 className="md:text-4xl text-3xl">Helping a local</h2>
          <h2 className="md:text-4xl text-3xl text-[#4CAF4F] mb-4">business reinvent itself</h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="md:w-1/2" data-aos="zoom-in">
          <div className="grid grid-cols-2 gap-4 items-center">
            {achievements.map(
              //menampilkan data achievement secara dinamis
              ({ img, count, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <img src={img} className="md:w-14 w-8" alt={label} />
                  <div>
                    <h3 className="md:text-3xl text-lg">{count}</h3>
                    <p>{label}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
