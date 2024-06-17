import React, { useState } from "react";
import { Banner1, Banner2, Banner3 } from "../../assets";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const Card = () => {
  const [current, setCurrent] = useState(0);
  const CourseData = [
    {
      header: "OUR COURSES",
      title: "With Scholar Teachers, Everything Is Easier",
      desc: "Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.",
      btn: "What's Scholar?",
      imgUrl: Banner1,
    },
    {
      header: "BEST RESULT",
      title: "Get the best result out of your effort",
      desc: "You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.",
      btn: "What's the best result?",
      imgUrl: Banner2,
    },
    {
      header: "ONLINE LEARNING",
      title: "Online Learning helps you save the time",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporious incididunt ut labore et dolore magna aliqua suspendisse.",
      btn: "What's Online Course?",
      imgUrl: Banner3,
    },
  ];

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? CourseData.length - 1 : prev - 1));
  };

  const NextSlide = () => {
    setCurrent((prev) => (prev === CourseData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="max-w-[980px]">
        <AnimatePresence>
          <motion.img
            key={current}
            layout
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            className="w-full"
            src={CourseData[current].imgUrl}
            alt=""
          />
        </AnimatePresence>
      </div>
      <div className="  absolute  h-full -left-20 top-80 w-full text-white flex flex-col gap-4 text-5xl z-50">
        <button onClick={prev}>
          <BsArrowLeftCircleFill />
        </button>
        <button onClick={NextSlide}>
          <BsArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Card;
