import React from "react";

const Header = () => {
  return (
    <div className="pt-20 mb-5">
      <div class="circle"></div>
      <div className="triangle"></div>
      <div className="max-w-[1100px] justify-between m-auto window">
        <div>
          <h className="text-8xl leading-normal">
            Hi <br /> I'm Chethas
          </h>
          <h3 className="text-xl mt-10">
            I'm a web designer, Android enthusiast and a custom ROM developer
            who's also passionate about Photography and Music
          </h3>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl">About me</h2>
          <p className="mt-5">
            I am a web designer, Android enthusiast, and custom ROM developer
            from India.{" "}
          </p>
          <br />
          <p>
            I have always been interested in technology, and that passion led me
            to explore web design and development. I love the creative process
            of designing beautiful and functional websites, and I'm constantly
            perfecting my front-end skills to create the best user experiences
            possible.{" "}
          </p>{" "}
          <br />
          <p>
            But my interest in technology doesn't stop there. I am also a big
            fan of Android, and I enjoy tinkering with custom ROMs to see what I
            can do to improve the performance and functionality of my devices.
            I'm always learning and experimenting with new things in this area.{" "}
          </p>
          <p>
            Aside from my love for technology, I have other passions as well. I
            enjoy photography and find it to be a great way to express my
            creativity and capture beautiful moments. I also enjoy playing the
            piano, which allows me to unwind and relax after a long day.
          </p>{" "}
          <br />
          <p>
            Currently, I am pursuing my Bachelor's degree in Computer Science
            and Engineering at Yenepoya Institute of Technology. I'm focused on
            honing my skills and knowledge in both front-end and back-end
            development so that I can create even more robust and dynamic
            websites and applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
