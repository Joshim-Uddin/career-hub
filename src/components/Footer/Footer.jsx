import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-black text-white px-40 py-12 mt-12">
      <div className="flex md:flex-row flex-col md:justify-between py-12 border-b-2 border-gray-700 mb-4">
        <div className="md:w-72 mb-4">
          <h3 className="text-2xl font-bold mb-4">CareerMatch</h3>
          <p className="mb-4">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex gap-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="bg-white rounded-full w-6 h-6 text-blue-400 p-2"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="bg-white rounded-full w-6 h-6 text-[#33CCFF] p-2"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="bg-white rounded-full w-6 h-6 text-orange-700 p-2"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <h5>Company</h5>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li className="text-sm">About Us</li>
              <li className="text-sm">Work</li>
              <li className="text-sm">Latest News</li>
              <li className="text-sm">Careers</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h5>Product</h5>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li className="text-sm">Prototype</li>
              <li className="text-sm">Plans & Pricing</li>
              <li className="text-sm">Customers</li>
              <li className="text-sm">Integrations</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h5>Support</h5>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li className="text-sm">Help Desk</li>
              <li className="text-sm">Sales</li>
              <li className="text-sm">Become a Partner</li>
              <li className="text-sm">Developers</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h5>Contact</h5>
            <p className="text-sm">524 Broadway , NYC</p>
            <p className="text-sm">+1 777 - 978 - 5570</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <small>@2023 CareerMatch All Rights Reserved</small>
        <small>Powered by CareerMatch</small>
      </div>
    </div>
  );
};

export default Footer;
