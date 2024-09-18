import React from "react";
import Slider from "react-slick";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Tom Crouise",
      role: "Founder & Chairman",
      imgSrc: "../../../public/images/about/employee-1.webp",
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      imgSrc: "../../../public/images/about/employee-2.webp",
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      imgSrc: "../../../public/images/about/employee-3.webp",
    },
    // Add more team members as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="mx-10">
            <div className="bg-white p-6 w-80">
              <div className="bg-gray-200 pt-7">
                <img src={member.imgSrc}  alt={member.name} className="mx-auto mb-4 h-44 w-44"/>
              </div>
              <div className="text-left mt-4">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <div className="flex justify-left space-x-4">
                  <Link to="#" aria-label={`Connect with ${member.name} on LinkedIn`}>
                    <FaLinkedinIn className='text-xl text-gray-600 hover:text-gray-800' />
                  </Link>
                  <Link to="#" aria-label={`Connect with ${member.name} on Twitter`}>
                    <FaTwitter className='text-xl text-gray-600 hover:text-gray-800' />
                  </Link>
                  <Link to="#" aria-label={`Connect with ${member.name} on Facebook`}>
                    <FaFacebookF className='text-xl text-gray-600 hover:text-gray-800' />
                  </Link>
                  <Link to="#" aria-label={`Connect with ${member.name} on Instagram`}>
                    <FaInstagram className='text-xl text-gray-600 hover:text-gray-800' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
