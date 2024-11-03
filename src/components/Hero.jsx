import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  const social_media = [
    { name: "logo-instagram", url: "https://www.instagram.com/ridjal_yuliantok01/" },
    { name: "logo-whatsapp", url: "https://wa.me/+6283842834089" },
    { name: "logo-linkedin", url: "https://www.linkedin.com/in/mohamad-rizal-yulianto-011515240/" },
    { name: "logo-Github", url: "https://github.com/mohrizalyulianto01" },
  ];

  const handleContactMeClick = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6283842834089";
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center overflow-x-hidden"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="flex items-center justify-center h-full md:w-1/2" // Adjust the width for medium screens
      >
        <img src={hero} alt="" className="md:w-10/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div
          className="md:text-left text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold mt-6 md:mt-0"> {/* Adjust the top margin for medium screens */}
            <span className="text-cyan-600 md:text-5xl text-5xl">
              Hello, My Name is
              <br />
            </span>
            <span>Mohamad Rizal Yulianto</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Junior Frontend Web Developer
          </h4>
          <button
            className="btn-primary mt-8"
            onClick={handleContactMeClick}
          >
            Contact Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-4">
            {social_media?.map((icon) => (
              <div>
                <a
                  key={icon.name}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white cursor-pointer"
                >
                  <ion-icon name={icon.name}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
