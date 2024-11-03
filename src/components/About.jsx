import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Companies Intern", count: "04" },
  ];
  const handleCVMeClick = () => {
    window.location.href =
      "https://drive.google.com/file/d/1mgfLjpxJSJSwetLRTS8IwMXKkAIbLOMQ/view?usp=sharing"
  };
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div
              className="text-gray-300 my-3"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              <p className="text-justify leading-7 w-11/12 mx-auto">
                As a Bachelor of Information Systems graduate who has a strong
                commitment to development and management product. Have work
                experience in the field of programming, so have proficiency in
                operating Trello, Agile Methodology, Github, Visual Studio Code,
                Figma, and Android Studio.

              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary mt-8" onClick={handleCVMeClick}>
                Download CV
              </button>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-5 flex justify-center items-center">
            <div
              className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg "
              data-aos="flip-down"
              data-aos-duration="3000"
            >
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
