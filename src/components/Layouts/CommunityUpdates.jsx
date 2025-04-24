import React, { useEffect } from "react";
import Title from "@/components/ui/Title";
import CardUpdate from "../ui/CardUpdate";
import AOS from "aos";
import "aos/dist/aos.css";

function CommunityUpdates() {
  useEffect(() => {
    AOS.init();
  }, []);
  const articles = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      img: "/images/updates-1.png",
    },
    {
      title: "What are your safeguarding responsibilities and how can you manage them?",
      img: "/images/updates-2.png",
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      img: "/images/updates-3.png",
    },
  ];

  return (
    <section className="max-w-screen-xl md:px-0 px-4 mx-auto pt-20 md:pb-36 pb-16 text-center">
      <div data-aos="fade-up">
        <Title title="Caring is the new marketing" desc="The Nextcent blog is the best place to read about the latest membership insights, trends and more." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5" data-aos="fade-up">
        {articles.map((article, index) => (
          <CardUpdate key={index} img={article.img} title={article.title} />
        ))}
      </div>
    </section>
  );
}

export default CommunityUpdates;
