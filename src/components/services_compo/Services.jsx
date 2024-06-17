import React from "react";
import ServicesCard from "./services_card/ServicesCard";
import { Services1, Services2, Services3 } from "../../assets";
// import About from "./Accordian/Accordian";
import Accordian from "./Accordian/Accordian";

const Services = () => {
  const servicesItem = [
    {
      title: "Online Degrees",
      desc: "Whenever you need free templates in HTML CSS, you just remember TemplateMo website.",
      icon: Services1,
    },
    {
      title: "Short Courses",
      desc: "You can browse free templates based on different tags such as digital marketing, etc.",
      icon: Services2,
    },
    {
      title: "Web Experts",
      desc: "You can start learning HTML CSS by modifying free templates from our website too.",
      icon: Services3,
    },
  ];

  const accordianItem = [
    {
      accordianTitle: "Where shall we begin?",
      accordianDesc:
        "Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    },
    {
      accordianTitle: "How do we work together?",
      accordianDesc:
        "Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    },
    {
      accordianTitle: "Why SCHOLAR is the best?",
      accordianDesc:
        "You can start learning HTML CSS by modifying free templates from our website too.",
    },
    {
      accordianTitle: "Do we get the best support?",
      accordianDesc:
        "You can also search on Google with specific keywords such as templatemo business templates, templatemo gallery templates, admin dashboard templatemo, 3-column templatemo, etc.",
    },
  ];

  return (
    <div className="Container flex flex-col justify-center items-center my-10 ">
      <div className="my-40 grid lg:grid-cols-3 md:grid-cols-2 gap-28 ">
        {servicesItem.map((item, i) => {
          return (
            <ServicesCard
              key={i}
              title={item.title}
              description={item.desc}
              image={item.icon}
            />
          );
        })}
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
        <div className=" bg-[#7a6ad8] rounded-2xl flex flex-col items-center w-full p-14 space-y-12">
          {accordianItem.map((item, i) => {
            return (
              <Accordian
                key={i}
                accTitle={item.accordianTitle}
                accDesc={item.accordianDesc}
              />
            );
          })}
        </div>

        <div className="flex flex-col bg-[#F1F0FE] justify-center p-20 gap-6">
          <p className="text-[#7a6ad8] font-semibold text-xl">ABOUT US</p>
          <h1 className="font-semibold text-2xl capitalize">
            What make us the best academy online?
          </h1>
          <p className="leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravid risus commodo.
          </p>
          <div>
            <button className="bg-[white] text-[#7a6ad8] font-medium text-sm px-5 py-2 rounded-full cursor-pointer hover:bg-[#7a6ad8] hover:text-white hover:duration-300 ">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
