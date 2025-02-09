import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-3">
      <div className="max-w-4xl shadow-md rounded-lg p-6 md:p-10 border border-gray-300 w-full md:w-3/4 lg:w-2/3">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-800">Art is Bliss</span>, your trusted source for the latest news, trends, and insights. 
          We are committed to delivering timely and accurate journalism that keeps you informed and engaged with the world.
        </p>
        
        <div className="border-t border-gray-300 pt-6 mt-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to provide unbiased, high-quality journalism that empowers readers with knowledge and 
            keeps them updated on the world’s most important events. We strive to uphold integrity, credibility, and a commitment 
            to truth in reporting. Our team of experienced journalists and contributors work diligently to cover stories that matter most.
          </p>
        </div>

        <div className="border-t border-gray-300 pt-6 mt-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Values</h2>
          <ul className="text-gray-700 list-disc pl-6">
            <li><strong className="text-blue-800">Integrity:</strong> We adhere to the highest standards of ethical journalism.</li>
            <li><strong className="text-blue-800">Objectivity:</strong> Our reporting is fair, balanced, and free from bias.</li>
            <li><strong className="text-blue-800">Innovation:</strong> We leverage cutting-edge technology to bring news in the most engaging formats.</li>
            <li><strong className="text-blue-800">Community:</strong> We value our readers and encourage thoughtful discussions.</li>
          </ul>
        </div>

        <div className="border-t border-gray-300 pt-6 mt-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Meet Our Team</h2>
          <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3000 }} className="mt-4">
            <SwiperSlide className="text-center p-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2"></div>
              <p className="text-blue-900 font-medium text-lg">Hailey</p>
              <p className="text-gray-600 text-sm">Editor-in-Chief</p>
            </SwiperSlide>
            <SwiperSlide className="text-center p-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2"></div>
              <p className="text-blue-900 font-medium text-lg">Hailey</p>
              <p className="text-gray-600 text-sm">Lead Journalist</p>
            </SwiperSlide>
            <SwiperSlide className="text-center p-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2"></div>
              <p className="text-blue-900 font-medium text-lg">Hailey</p>
              <p className="text-gray-600 text-sm">Senior Reporter</p>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="border-t border-gray-300 pt-6 mt-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">What Our Readers Say</h2>
          <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 4000 }} className="mt-4">
            <SwiperSlide className="text-center p-4 bg-gray-200 rounded-lg">
              <p className="text-gray-800 italic">"The Daily Pulse keeps me updated with reliable news every day!"</p>
              <p className="text-blue-800 font-medium">- Alex M.</p>
            </SwiperSlide>
            <SwiperSlide className="text-center p-4 bg-gray-200 rounded-lg">
              <p className="text-gray-800 italic">"A must-read for anyone who wants the latest insights!"</p>
              <p className="text-blue-800 font-medium">- Samantha K.</p>
            </SwiperSlide>
            <SwiperSlide className="text-center p-4 bg-gray-200 rounded-lg">
              <p className="text-gray-800 italic">"Engaging, informative, and well-researched articles!"</p>
              <p className="text-blue-800 font-medium">- David L.</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
