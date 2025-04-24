import React, { useEffect } from "react";
import Title from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import AOS from "aos";
import "aos/dist/aos.css";

function CommunityManagement() {
  useEffect(() => {
    AOS.init();
  }, []);
  const cards = [
    {
      id: 1,
      title: "Membership Organisations",
      imgSrc: "/images/community/community-1.png",
      desc: "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      id: 2,
      title: "National Associations",
      imgSrc: "/images/community/community-2.png",
      desc: "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      imgSrc: "/images/community/community-3.png",
      desc: "Our membership management software provides full automation of membership renewals and payments.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto md:px-0 px-4 pt-16 text-center">
      <div data-aos="fade-up">
        <Title title="Manage your entire community in a single system" desc="Who is Nextcent suitable for?" />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} img={card.imgSrc} desc={card.desc} />
        ))}
      </div>
    </div>
  );
}

export default CommunityManagement;
