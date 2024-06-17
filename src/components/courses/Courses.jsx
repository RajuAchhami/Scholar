import React, { useState } from "react";
import {
  Course1,
  Course2,
  Course3,
  Course4,
  Course5,
  Course6,
} from "../../assets";

const Courses = () => {
  const Courses = [
    {
      title: "Learn Web Design",
      aurthor: "Stella Blair",
      price: "160",
      category: "WEBDESIGN",
      image: Course1,
    },
    {
      title: "Web Development Tips",
      aurthor: "Cindy Walker",
      price: "340",
      category: "DEVELOPMENT",
      image: Course2,
    },
    {
      title: "Latest Web Trends",
      aurthor: "David Hutson",
      price: "640",
      category: "WORDPRESS",
      image: Course3,
    },
    {
      title: "Online Learning Steps",
      aurthor: "Stella Blair",
      price: "450",
      category: "DEVELOPMENT",
      image: Course4,
    },
    {
      title: "Full Stack Development",
      aurthor: "David Huston",
      price: "240",
      category: "WEBDESIGN",
      image: Course5,
    },
    {
      title: "Be a Wordpress Master",
      aurthor: "Sophia Rose",
      price: "320",
      category: "WORDPRESS",
      image: Course6,
    },
  ];
  const [data, setData] = useState(Courses);

  const LatestCoursesCategory = [
    {
      title: "Show All",
    },
    {
      title: "Webdesign",
    },
    {
      title: "Development",
    },
    {
      title: "Wordpress",
    },
  ];

  const handleClick = (item) => {
    if (!item || !item.title) return;
    const newFilterText = item.title.toUpperCase();
    console.log(item.title);

    if (newFilterText === "SHOW ALL") {
      setData(Courses);
    } else {
      setData(
        Courses.filter(
          (course) => course.category.toUpperCase() === newFilterText
        )
      );
    }
  };

  return (
    <div className="Container">
      <div className="flex flex-col items-center my-28">
        <div className="text-center flex flex-col gap-7 mb-10 md:mb-20">
          <p className="text-sm font-semibold text-[#7a6ad8]">LATEST COURSES</p>
          <p className="text-4xl font-semibold text-[#1E1E1E]">
            Latest Courses
          </p>
        </div>
        <div className="bg-[#f1f0fe]  flex items-center px-4 gap-5 md:gap-10 py-6 md:px-16 rounded-[50px] mb-16 md:mb-24">
          {LatestCoursesCategory.map((item, index) => {
            return (
              <div
                key={index}
                className="text-[#1E1E1E] text-xs md:text-lg font-medium w-max text-center cursor-pointer"
                onClick={() => {
                  handleClick(item);
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center mx-14">
          {data.map((item, index) => {
            return (
              <div
                className="bg-[#f1f0fe] rounded-3xl overflow-hidden  cursor-pointer group"
                key={index}
              >
                <div className="relative ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bg-[#fafafaf2] px-3 py-1 font-medium text-sm top-3 left-3 rounded-xl text-[#7a6ad8]">
                    {item.category}
                  </div>
                  <div className="absolute flex items-center justify-center bg-[#7a6ad8] text-white text-lg font-bold rounded-full w-24 h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 -top-5 -right-5 md:-top-4 md:-right-4 lg:-top-6 lg:-right-7 shadow-lg group-hover:size-36 duration-300 ">
                    <p className="font-bold text-lg text-white">$ </p>
                    <span className="text-lg md:text-xl lg:text-xl font-bold text-white mt-5 mr-6 ml-1 ">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-5 px-4 lg:px-8">
                  <p className="lg:text-base xl:text-lg text-[#7a6ad8]">
                    {item.aurthor}
                  </p>
                  <p className="text-2xl  text-[#1e1e1e] font-semibold group-hover:text-[#7a6ad8]">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
