import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const ContactUs = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-12 mb-20">
        <div className="grid grid-cols-12 gap-12 px-20 p-6 ">
          <div className="col-span-4 p-6 bg-white drop-shadow-2xl">
            <div className="mt-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-red-500 text-white"><FaPhoneAlt className='w-6 h-6'/></div>
                <h3 className="font-bold text-lg">Call To Us</h3>
              </div>
              <p className="mt-2 text-gray-600">We are available 24/7, 7 days a week</p>
              <p className="font-medium text-gray-800 mt-1">Phone: +8801611112222</p>
            </div>
            <hr className='mt-14 mb-10'/>
            <div>
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-red-500 text-white"><MdOutlineMailOutline className='w-6 h-6'/></div>
                <h3 className="font-bold text-lg">Write To Us</h3>
              </div>
              <p className="mt-2 text-gray-600">Fill out our form, and we will contact you within 24 hours.</p>
              <p className="font-medium text-gray-800 mt-3">Emails: customer@woowbazar.com</p>
              <p className="font-medium text-gray-800 mt-1">Emails: support@woowbazar.com</p>
            </div>
          </div>
          <div className="col-span-8 p-6 bg-white drop-shadow-2xl pb-10">
            <form className="space-y-6">
              <div className="grid grid-cols-3 gap-4 mb-2">
                <input type="text" placeholder="your name*" className="p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black "/>
                <input type="email" placeholder="your email*" className="p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black "/>
                <input type="tel" placeholder="your phone*" className="p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black "/>
              </div>
              <textarea placeholder="enter your message" rows="8" className="w-full mt-5 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 resize-none"></textarea>
              <div className="flex justify-end">
                <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
